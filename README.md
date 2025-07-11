# 🛡️ Customer Reverse Proxy

Reverse proxy server for **customer-facing portals** under `customer.digital-mafia.co.za`.

Routes to client dashboards, portals, and APIs.

---

## ✨ Features
- Reverse proxies multiple client portals and dashboards
- Keeps customer apps organized under one subdomain
- Built with Node.js, Express, and http-proxy-middleware

---

## 📦 Folder structure
````

customer-reverse-proxy/
├── config/
│   └── proxies.js
├── .env
├── index.js
├── package.json
└── README.md

````

---

## ⚙️ Local development

```bash
git clone https://github.com/YOUR_USERNAME/customer-reverse-proxy.git
cd customer-reverse-proxy
npm install
npm start
````

Starts at:

```
http://localhost:5000
```

---

## 🧪 Example routes

| Path        | Target frontend                        |
| ----------- | -------------------------------------- |
| `/client-a` | Client A frontend |
| `/client-b` | Client B frontend |
| ...                 | Add more as needed |

### Adding a route:  
In the module.exports dictionary at `config/proxies.js` add:
```
path: "/path-to-route",
middleware: createProxyMiddleware({
  target: process.env.TARGET_ROUTE_URL,
  changeOrigin: true,
}),
```

And add `TARGET_ROUTE_URL` in `.env`.

---

## 🌱 Environment variables (`.env`)

| Key  | Example | Purpose                              |
| ---- | ------- | ------------------------------------ |
| CLIENT\_A\_URL | `https://digital-mafia-solution.github.io/client-a` | Client A Frontend target              |
| CLIENT\_B\_URL | `https://digital-mafia-solution.github.io/client-b` | Client B Frontend target              |
| PORT | `5000`  | Local port (Render overrides \$PORT) |

---

## ☁️ Deployment (Render.com)

1. Push to GitHub.
2. Create Render Web Service.
3. Build: `npm install`
4. Start: `npm start`
5. Add custom domain: `customer.digital-mafia.co.za`.

---

## 🧠 License

MIT — Digital Mafia