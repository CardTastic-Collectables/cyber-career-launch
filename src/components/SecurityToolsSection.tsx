import { useState } from "react";
import { Terminal, Copy, Check, Network, Shield, Search, Server, Database, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

// Nmap scan type descriptions
const scanTypeDescriptions: Record<string, { name: string; description: string }> = {
  "-sS": { name: "TCP SYN / Stealth Scan", description: "Default scan for root users. Fast and stealthy as it never completes the TCP handshake." },
  "-sT": { name: "TCP Connect Scan", description: "Completes full 3-way handshake. More detectable but works without root privileges." },
  "-sU": { name: "UDP Scan", description: "Scans UDP ports. Slower but essential for services like DNS, SNMP, and DHCP." },
  "-sX": { name: "Xmas Scan", description: "Sets FIN, URG, PSH flags. Used for firewall evasion on non-Windows systems." },
  "-sA": { name: "ACK Scan", description: "Maps firewall rules. Determines if ports are filtered or unfiltered." },
  "-sF": { name: "FIN Scan", description: "Sets only FIN flag. Bypasses non-stateful firewalls." },
  "-sN": { name: "NULL Scan", description: "Sets no flags. Stealthy but may not work on all systems." },
  "-sV": { name: "Version Detection", description: "Probes open ports to determine service/version information." },
};

// Enumeration tool descriptions
const enumToolDescriptions: Record<string, { command: string; description: string }> = {
  "nbtstat-a": { command: "nbtstat -a", description: "Retrieves NetBIOS name table from remote system including hostnames and MAC addresses." },
  "net-use": { command: "net use", description: "Establishes null session to enumerate shares without authentication." },
  "snmpwalk-v1": { command: "snmpwalk -v1 -c public", description: "SNMP enumeration using v1 protocol. Retrieves network resources and configurations." },
  "snmpwalk-v2c": { command: "snmpwalk -v2c -c public", description: "SNMP enumeration using v2c protocol with community string." },
  "nmap-ldap": { command: "nmap -p 389 --script ldap-brute", description: "Brute force LDAP authentication to enumerate Active Directory users." },
  "dig-ns": { command: "dig ns", description: "Queries DNS nameservers for a domain." },
  "dig-axfr": { command: "dig axfr", description: "Attempts DNS zone transfer to retrieve all DNS records." },
};

const SecurityToolsSection = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  
  // Nmap state
  const [nmapTarget, setNmapTarget] = useState("10.10.1.11");
  const [nmapScanType, setNmapScanType] = useState("-sS");
  const [nmapOptions, setNmapOptions] = useState({
    pn: false,
    sV: false,
    O: false,
    A: false,
    v: false,
    reason: false,
  });
  const [nmapScript, setNmapScript] = useState("none");
  const [nmapTiming, setNmapTiming] = useState("default");
  const [nmapSourcePort, setNmapSourcePort] = useState("");
  
  // Hping3 state
  const [hpingTarget, setHpingTarget] = useState("10.10.1.11");
  const [hpingPort, setHpingPort] = useState("80");
  const [hpingCount, setHpingCount] = useState("5");
  const [hpingFlags, setHpingFlags] = useState({
    syn: true,
    ack: false,
    fin: false,
    flood: false,
  });
  const [hpingMode, setHpingMode] = useState("tcp");
  
  // Enumeration state
  const [enumTarget, setEnumTarget] = useState("10.10.1.22");
  const [enumTool, setEnumTool] = useState("nbtstat-a");
  const [enumCommunity, setEnumCommunity] = useState("public");
  
  // SMTP state
  const [smtpTarget, setSmtpTarget] = useState("10.10.1.19");
  const [smtpPort, setSmtpPort] = useState("25");
  const [smtpScript, setSmtpScript] = useState("smtp-enum-users");

  const buildNmapCommand = () => {
    let cmd = `nmap ${nmapScanType}`;
    if (nmapOptions.pn) cmd += " -Pn";
    if (nmapOptions.sV) cmd += " -sV";
    if (nmapOptions.O) cmd += " -O";
    if (nmapOptions.A) cmd += " -A";
    if (nmapOptions.v) cmd += " -v";
    if (nmapOptions.reason) cmd += " --reason";
    if (nmapSourcePort) cmd += ` -g ${nmapSourcePort}`;
    if (nmapTiming && nmapTiming !== "default") cmd += ` ${nmapTiming}`;
    if (nmapScript && nmapScript !== "none") cmd += ` --script=${nmapScript}`;
    cmd += ` ${nmapTarget}`;
    return cmd;
  };

  const buildHpingCommand = () => {
    let cmd = `hping3`;
    if (hpingMode && hpingMode !== "tcp") cmd += ` ${hpingMode}`;
    if (hpingFlags.syn) cmd += " -S";
    if (hpingFlags.ack) cmd += " -A";
    if (hpingFlags.fin) cmd += " -F";
    if (hpingFlags.flood) cmd += " --flood";
    if (hpingPort) cmd += ` -p ${hpingPort}`;
    if (hpingCount && !hpingFlags.flood) cmd += ` -c ${hpingCount}`;
    cmd += ` ${hpingTarget}`;
    return cmd;
  };

  const buildEnumCommand = () => {
    const tool = enumToolDescriptions[enumTool];
    if (!tool) return "";
    
    let cmd = tool.command;
    if (enumTool.includes("snmp")) {
      cmd = cmd.replace("public", enumCommunity);
    }
    cmd += ` ${enumTarget}`;
    return cmd;
  };

  const buildSmtpCommand = () => {
    if (smtpScript === "full-audit") {
      return `nmap -p ${smtpPort} --script=smtp-enum-users,smtp-open-relay,smtp-commands ${smtpTarget}`;
    }
    return `nmap -p ${smtpPort} --script=${smtpScript} ${smtpTarget}`;
  };

  const copyToClipboard = async (command: string, id: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedCommand(id);
      toast.success("Command copied to clipboard");
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      toast.error("Failed to copy command");
    }
  };

  const TerminalOutput = ({ command, id }: { command: string; id: string }) => (
    <div className="relative mt-4 rounded-lg border border-primary/30 bg-background p-4 font-mono">
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
        <Terminal className="w-4 h-4" />
        <span>Command Output</span>
      </div>
      <code className="text-primary text-sm md:text-base break-all">{command}</code>
      <Button
        variant="cyberGhost"
        size="sm"
        className="absolute top-2 right-2"
        onClick={() => copyToClipboard(command, id)}
      >
        {copiedCommand === id ? (
          <Check className="w-4 h-4" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </Button>
    </div>
  );

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8 max-w-6xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-primary font-mono">03.</span> Security Tools Lab
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interactive command builders for network scanning, enumeration, and security analysis.
          Build and copy commands for your penetration testing workflow.
        </p>

        <Tabs defaultValue="nmap" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-card/50">
            <TabsTrigger value="nmap" className="gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
              <Network className="w-4 h-4" />
              <span className="hidden sm:inline">Nmap</span>
            </TabsTrigger>
            <TabsTrigger value="hping" className="gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
              <Wifi className="w-4 h-4" />
              <span className="hidden sm:inline">Hping3</span>
            </TabsTrigger>
            <TabsTrigger value="enum" className="gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Enumeration</span>
            </TabsTrigger>
            <TabsTrigger value="smtp" className="gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
              <Server className="w-4 h-4" />
              <span className="hidden sm:inline">SMTP</span>
            </TabsTrigger>
          </TabsList>

          {/* Nmap Tab */}
          <TabsContent value="nmap">
            <div className="cyber-border rounded-lg p-6 bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Network className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Interactive Nmap Command Builder</h3>
                  <p className="text-sm text-muted-foreground">Construct advanced Nmap queries for network discovery</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label>Target IP/Range/Domain</Label>
                  <Input
                    value={nmapTarget}
                    onChange={(e) => setNmapTarget(e.target.value)}
                    placeholder="10.10.1.11"
                    className="font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Scan Technique</Label>
                  <Select value={nmapScanType} onValueChange={setNmapScanType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(scanTypeDescriptions).map(([value, { name }]) => (
                        <SelectItem key={value} value={value}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Scan type description */}
              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-6">
                <p className="text-sm">
                  <strong className="text-primary">{scanTypeDescriptions[nmapScanType]?.name}:</strong>{" "}
                  <span className="text-muted-foreground">{scanTypeDescriptions[nmapScanType]?.description}</span>
                </p>
              </div>

              {/* Options */}
              <div className="space-y-4 mb-6">
                <Label>Host Discovery & Detection</Label>
                <div className="flex flex-wrap gap-4 bg-muted/30 p-4 rounded-lg">
                  {[
                    { id: "pn", label: "-Pn (No Ping)" },
                    { id: "sV", label: "-sV (Version)" },
                    { id: "O", label: "-O (OS Detect)" },
                    { id: "A", label: "-A (Aggressive)" },
                    { id: "v", label: "-v (Verbose)" },
                    { id: "reason", label: "--reason" },
                  ].map((opt) => (
                    <div key={opt.id} className="flex items-center gap-2">
                      <Checkbox
                        id={opt.id}
                        checked={nmapOptions[opt.id as keyof typeof nmapOptions]}
                        onCheckedChange={(checked) =>
                          setNmapOptions((prev) => ({ ...prev, [opt.id]: checked }))
                        }
                      />
                      <label htmlFor={opt.id} className="text-sm font-mono cursor-pointer">
                        {opt.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="space-y-2">
                  <Label>Source Port (-g)</Label>
                  <Input
                    value={nmapSourcePort}
                    onChange={(e) => setNmapSourcePort(e.target.value)}
                    placeholder="e.g. 53"
                    className="font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Timing</Label>
                  <Select value={nmapTiming} onValueChange={setNmapTiming}>
                    <SelectTrigger>
                      <SelectValue placeholder="Default (T3)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default (T3)</SelectItem>
                      <SelectItem value="-T4">T4 (Aggressive)</SelectItem>
                      <SelectItem value="-T5">T5 (Insane)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Script</Label>
                  <Select value={nmapScript} onValueChange={setNmapScript}>
                    <SelectTrigger>
                      <SelectValue placeholder="(None)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">(None)</SelectItem>
                      <SelectItem value="vuln">vuln</SelectItem>
                      <SelectItem value="http-enum">http-enum</SelectItem>
                      <SelectItem value="smb-os-discovery">smb-os-discovery</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <TerminalOutput command={buildNmapCommand()} id="nmap" />
            </div>
          </TabsContent>

          {/* Hping3 Tab */}
          <TabsContent value="hping">
            <div className="cyber-border rounded-lg p-6 bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Wifi className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Interactive Hping3 Packet Builder</h3>
                  <p className="text-sm text-muted-foreground">Craft custom TCP/IP packets for firewall testing</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label>Mode</Label>
                  <Select value={hpingMode} onValueChange={setHpingMode}>
                    <SelectTrigger>
                      <SelectValue placeholder="TCP (Default)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tcp">TCP (Default)</SelectItem>
                      <SelectItem value="-1">ICMP Mode (-1)</SelectItem>
                      <SelectItem value="-2">UDP Mode (-2)</SelectItem>
                      <SelectItem value="-8">Scan Mode (-8)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Target IP</Label>
                  <Input
                    value={hpingTarget}
                    onChange={(e) => setHpingTarget(e.target.value)}
                    placeholder="10.10.1.11"
                    className="font-mono"
                  />
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <Label>TCP Flags & Options</Label>
                <div className="flex flex-wrap gap-4 bg-muted/30 p-4 rounded-lg">
                  {[
                    { id: "syn", label: "-S (SYN)" },
                    { id: "ack", label: "-A (ACK)" },
                    { id: "fin", label: "-F (FIN)" },
                    { id: "flood", label: "--flood" },
                  ].map((flag) => (
                    <div key={flag.id} className="flex items-center gap-2">
                      <Checkbox
                        id={`hping-${flag.id}`}
                        checked={hpingFlags[flag.id as keyof typeof hpingFlags]}
                        onCheckedChange={(checked) =>
                          setHpingFlags((prev) => ({ ...prev, [flag.id]: checked }))
                        }
                      />
                      <label htmlFor={`hping-${flag.id}`} className="text-sm font-mono cursor-pointer">
                        {flag.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <Label>Target Port (-p)</Label>
                  <Input
                    value={hpingPort}
                    onChange={(e) => setHpingPort(e.target.value)}
                    placeholder="80"
                    className="font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Count (-c)</Label>
                  <Input
                    value={hpingCount}
                    onChange={(e) => setHpingCount(e.target.value)}
                    placeholder="5"
                    className="font-mono"
                    disabled={hpingFlags.flood}
                  />
                </div>
              </div>

              <TerminalOutput command={buildHpingCommand()} id="hping" />
            </div>
          </TabsContent>

          {/* Enumeration Tab */}
          <TabsContent value="enum">
            <div className="cyber-border rounded-lg p-6 bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Service Enumeration Tools</h3>
                  <p className="text-sm text-muted-foreground">Enumerate NetBIOS, SNMP, LDAP, and DNS services</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label>Protocol/Tool</Label>
                  <Select value={enumTool} onValueChange={setEnumTool}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nbtstat-a">NetBIOS: nbtstat -a (Name Table)</SelectItem>
                      <SelectItem value="net-use">NetBIOS: net use (Null Session)</SelectItem>
                      <SelectItem value="snmpwalk-v1">SNMP: snmpwalk v1</SelectItem>
                      <SelectItem value="snmpwalk-v2c">SNMP: snmpwalk v2c</SelectItem>
                      <SelectItem value="nmap-ldap">LDAP: Nmap Brute Force</SelectItem>
                      <SelectItem value="dig-ns">DNS: Dig Name Servers</SelectItem>
                      <SelectItem value="dig-axfr">DNS: Dig Zone Transfer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Target IP/Domain</Label>
                  <Input
                    value={enumTarget}
                    onChange={(e) => setEnumTarget(e.target.value)}
                    placeholder="10.10.1.22"
                    className="font-mono"
                  />
                </div>
              </div>

              {enumTool.includes("snmp") && (
                <div className="space-y-2 mb-6">
                  <Label>Community String</Label>
                  <Input
                    value={enumCommunity}
                    onChange={(e) => setEnumCommunity(e.target.value)}
                    placeholder="public"
                    className="font-mono max-w-xs"
                  />
                </div>
              )}

              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-6">
                <p className="text-sm text-muted-foreground">
                  {enumToolDescriptions[enumTool]?.description}
                </p>
              </div>

              <TerminalOutput command={buildEnumCommand()} id="enum" />
            </div>
          </TabsContent>

          {/* SMTP Tab */}
          <TabsContent value="smtp">
            <div className="cyber-border rounded-lg p-6 bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">SMTP Enumeration (Nmap Scripts)</h3>
                  <p className="text-sm text-muted-foreground">Enumerate users, check for open relays, and identify vulnerabilities</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-2">
                  <Label>Target IP</Label>
                  <Input
                    value={smtpTarget}
                    onChange={(e) => setSmtpTarget(e.target.value)}
                    placeholder="10.10.1.19"
                    className="font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Target Port</Label>
                  <Input
                    value={smtpPort}
                    onChange={(e) => setSmtpPort(e.target.value)}
                    placeholder="25"
                    className="font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Script Selection</Label>
                  <Select value={smtpScript} onValueChange={setSmtpScript}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="smtp-enum-users">smtp-enum-users (User Enum)</SelectItem>
                      <SelectItem value="smtp-open-relay">smtp-open-relay (Open Relay Check)</SelectItem>
                      <SelectItem value="smtp-commands">smtp-commands (List Commands)</SelectItem>
                      <SelectItem value="smtp-ntlm-info">smtp-ntlm-info (NTLM Info)</SelectItem>
                      <SelectItem value="full-audit">FULL VULNERABILITY SCAN (All Scripts)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <TerminalOutput command={buildSmtpCommand()} id="smtp" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SecurityToolsSection;
