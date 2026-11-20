# ComplianceSearcher MCP Server

Official Model Context Protocol (MCP) server for **[ComplianceSearcher](https://compliancesearcher.com/)** — Institutional Sanctions, PEP, UBO, SWIFT Payment, Trade & Financial Crime Compliance Intelligence.

## Quick Start (Free Community Tier — No API Key Required)

Connect directly to our hosted **Streamable HTTP MCP** endpoint (`15 calls/day` free per IP):

```json
{
  "mcpServers": {
    "compliancesearcher": {
      "url": "https://compliancesearcher.com/mcp"
    }
  }
}
```

Or run via `npx` (stdio bridge for Claude Desktop / Cursor):

```json
{
  "mcpServers": {
    "compliancesearcher": {
      "command": "npx",
      "args": ["-y", "@compliancesearcher/mcp"]
    }
  }
}
```

### Enterprise Tier (360° Dossiers, UBO/RCA, Batch & High Volume)

Add your organization API key (`cs_live_...`, requested at [compliancesearcher.com](https://compliancesearcher.com/)):

```json
{
  "mcpServers": {
    "compliancesearcher": {
      "url": "https://compliancesearcher.com/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_ENTERPRISE_API_KEY"
      }
    }
  }
}
```

## Available Tools (10)

| Tool | Tier | Description |
|---|---|---|
| `screen_sanctions` | **Free** | Fast sanctions & IMO screening across OFAC, UN, EU, UK OFSI, MASAK, SECO, SEMA |
| `check_bic_code` | **Free** | ISO 9362 BIC/SWIFT validation, bank sanctions & FATF Black/Grey list check |
| `screen_payment_message` | **Free** | Parse & screen SWIFT MT103/MT202/MT700 & ISO 20022 (`pacs.008`/`pacs.009`) → `PASS` / `HOLD_EDD` / `BLOCK` |
| `check_trade_hs` | **Free** | HS / GTIP tariff, BIS & EU TARIC dual-use & destination country restriction check |
| `screen_trade_document` | **Free** | Commercial Invoice / Bill of Lading / L/C TBML screening |
| `find_candidates` | Enterprise | Entity disambiguation across global & Turkish (KAP/BIST, MERSIS) registries |
| `get_intelligence_dossier` | Enterprise | Full 360° intelligence dossier (sanctions, PEP/RCA, UBO, OFAC 50% rule, verified adverse media) |
| `check_cyber_or_document` | Enterprise | Crypto wallets (BTC/ETH/TRON), domains, IPs, IBAN, TCKN/VKN, LEI, Passport MRZ |
| `screen_batch` | Enterprise | Batch screening for up to 100 entities per call |
| `search_entities` | Enterprise | Search unified sanctions & regulatory entity repository |

## Links

- Website: https://compliancesearcher.com/
- OpenAPI 3.1 Spec: https://compliancesearcher.com/openapi.json
- Live Status: https://compliancesearcher.com/#/durum
- Contact: support@compliancesearcher.com
