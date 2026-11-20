#!/usr/bin/env node
'use strict';
/* ComplianceSearcher MCP stdio-to-HTTP bridge (Zero dependencies, Node 18+)
 * Works out of the box in Free Community Tier (5 calls/day, no API key needed)
 * or with COMPLIANCESEARCHER_API_KEY for Enterprise Tier (360° dossiers, UBO, Batch). */
const readline = require('readline');

const ENDPOINT = process.env.COMPLIANCESEARCHER_MCP_URL || 'https://compliancesearcher.com/mcp';
const API_KEY = process.env.COMPLIANCESEARCHER_API_KEY || '';

const rl = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });

rl.on('line', async line => {
  const trimmed = line.trim();
  if (!trimmed) return;
  let req;
  try { req = JSON.parse(trimmed); } catch {
    process.stdout.write(JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }) + '\n');
    return;
  }
  const headers = { 'Content-Type': 'application/json', Accept: 'application/json' };
  if (API_KEY) headers.Authorization = `Bearer ${API_KEY}`;
  try {
    const res = await fetch(ENDPOINT, { method: 'POST', headers, body: JSON.stringify(req) });
    if (res.status === 202) return;
    const text = await res.text();
    if (text.trim()) process.stdout.write(text.trim() + '\n');
  } catch (err) {
    if (req.id !== undefined) {
      process.stdout.write(JSON.stringify({
        jsonrpc: '2.0',
        id: req.id,
        error: { code: -32000, message: `Connection error: ${err.message || err}` },
      }) + '\n');
    }
  }
});
