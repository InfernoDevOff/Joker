'use client';

import { useEffect, useRef, useState } from 'react';

const HackingPage: React.FC = () => {
    const terminalRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [commands, setCommands] = useState<string[]>([
        'Welcome to the Dark Web Terminal',
        'Type "help" for a list of commands.',
    ]);

    const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputRef.current) {
            const input = inputRef.current.value;
            processCommand(input);
            inputRef.current.value = '';
        }
    };

    const processCommand = (input: string) => {
        let response = '';
        switch (input.toLowerCase()) {
            case 'help':
                response = 'Available commands: help, clear, ls, whoami, info, exit, ip, netstat, ping, traceroute, scan, connect, disconnect, access, download, upload, bank hack, darkweb accessories, view profiles, system info, password crack, etc.';
                break;
            case 'clear':
                setCommands([]);
                return;
            case 'ls':
                response = 'Documents\nImages\nVideos\nHidden Files\nBank Info\nDark Web Links';
                break;
            case 'whoami':
                response = 'User: hacker123\nAccess Level: Admin';
                break;
            case 'info':
                response = 'This terminal simulates a dark web environment.';
                break;
            case 'exit':
                response = 'Exiting the terminal...';
                break;
            case 'ip':
                response = 'Your IP: 192.168.1.1';
                break;
            case 'netstat':
                response = 'Active connections:\n127.0.0.1:8080\n192.168.1.100:22';
                break;
            case 'ping':
                response = 'Pinging google.com...\nReply from 172.217.3.206: bytes=32 time=14ms TTL=115';
                break;
            case 'traceroute':
                response = 'Tracing route to google.com...\n1. 192.168.1.1\n2. 192.168.1.100\n3. 172.217.3.206';
                break;
            case 'bank hack':
                response = 'Accessing bank system...\nTransfer completed: $10,000';
                break;
            case 'darkweb accessories':
                response = 'Accessories:\n1. VPN\n2. Tor Browser\n3. Encrypted Chat\n4. Cryptocurrency Wallets';
                break;
            case 'view profiles':
                response = 'Profiles:\n- User: hacker123\n- User: cryptoKing\n- User: darknetWarrior';
                break;
            case 'system info':
                response = 'OS: DarkNet OS\nVersion: 0.9.9\nUptime: 48 days';
                break;
            case 'password crack':
                response = 'Cracking password...\nSuccess: password123';
                break;
            case 'scan':
                response = 'Scanning networks...\nFound: 3 devices online.';
                break;
            case 'connect':
                response = 'Connecting to server...\nConnected to server 192.168.1.50.';
                break;
            case 'disconnect':
                response = 'Disconnected.';
                break;
            case 'download':
                response = 'Downloading files...\nFiles downloaded successfully.';
                break;
            case 'upload':
                response = 'Uploading files...\nFiles uploaded successfully.';
                break;
            case 'status':
                response = 'System status: All systems operational.';
                break;
            case 'config':
                response = 'Configuration settings...\nFirewall: Enabled\nEncryption: AES-256';
                break;
            case 'version':
                response = 'Version 1.0.0';
                break;
            case 'view logs':
                response = 'Logs:\n[INFO] User logged in\n[ERROR] Failed login attempt';
                break;
            case 'trace':
                response = 'Tracing IP...\nIP: 192.168.1.100\nLocation: Unknown';
                break;
            case 'stealth mode':
                response = 'Stealth mode activated. All activities hidden.';
                break;
            case 'reset':
                response = 'Resetting system...\nSystem reset complete.';
                break;
            case 'access logs':
                response = 'Access logs:\nUser1: Accessed secure files\nUser2: Failed to access bank';
                break;
            case 'encryption':
                response = 'Using AES-256 encryption.';
                break;
            case 'decrypt':
                response = 'Decrypting files...\nFiles decrypted successfully.';
                break;
            case 'upload malware':
                response = 'Uploading malware...\nMalware uploaded successfully.';
                break;
            case 'download data':
                response = 'Downloading data...\nData downloaded: 5GB';
                break;
            case 'run script':
                response = 'Running script...\nScript executed successfully.';
                break;
            case 'check firewall':
                response = 'Firewall status: Active\nIncoming connections: Blocked';
                break;
            case 'find vulnerabilities':
                response = 'Scanning for vulnerabilities...\n3 vulnerabilities found.';
                break;
            case 'exploit':
                response = 'Exploiting vulnerabilities...\nAccess granted.';
                break;
            case 'remote access':
                response = 'Establishing remote access...\nAccess established.';
                break;
            case 'data breach':
                response = 'Data breach detected!\nImmediate action required!';
                break;
            case 'help <command>':
                response = 'Detailed help for <command>...';
                break;
            default:
                response = 'Error: Command not found.';
        }
        setCommands((prevCommands) => [...prevCommands, `> ${input}`, response]);
    };

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [commands]);

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-black text-green-400 font-mono">
            <div
                ref={terminalRef}
                className="flex-grow w-full max-w-2xl p-4 overflow-y-auto border border-green-500 bg-black rounded-lg shadow-lg mt-12"
                style={{ height: '50%' }} // Adjust height as needed
            >
                {commands.map((cmd, index) => (
                    <div key={index}>{cmd}</div>
                ))}
            </div>
            <input
                ref={inputRef}
                type="text"
                onKeyDown={handleInput}
                className="bg-black border-t border-green-500 p-2 outline-none w-full max-w-2xl"
                placeholder="Type a command..."
            />
        </div>
    );
};

// Global CSS
<style jsx global>{`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Courier New', Courier, monospace;
        background: linear-gradient(135deg, black, darkblue);
        animation: backgroundAnimation 10s infinite alternate;
    }

    @keyframes backgroundAnimation {
        0% { background-color: black; }
        50% { background-color: darkblue; }
        100% { background-color: white; }
    }
`}</style>

export default HackingPage;
