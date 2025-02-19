## Overview

A fully self-hosted, containerized static website built as a wedding invitation. https://wedding.ohmm.cloud/wedding-invitation

I designed this project to explore modern web technologies, automation, and deployment best practices while building a polished, real-world application.

_Private information and photos were replaced with placeholders._

## Tech Stack

**Frontend:** React + TypeScript + Vite

- Component-based architecture for maintainability and scalability
- Optimized for performance with lazy loading
- Fully responsive, mobile-first design
- Page view analytics with Umami (self-hosted, privacy-focused tracking)

**Infrastructure & Deployment:**

- **Containerized with Docker** → Ensures consistent and reproducible deployments
- **Served via NGINX** → Optimized for static file delivery
- **Reverse-proxied with Traefik** → Dynamic routing and rate limiting
- **Self-hosted on a remote Linux server** → Full control over infrastructure (currently moved to on-prem)
- **DNS & SSL handled via Cloudflare** → Secure, globally optimized traffic routing
- **Persistent storage on ZFS** → Ensuring data integrity and reliability

## DevOps & Automation

- **GitHub-based deployment workflow** → Push to `main` triggers automated builds and redeploys
- **Infrastructure as Code** → WIP
- **Log monitoring & error tracking** → WIP
- **Automated SSL renewal** → No manual intervention required (handled by traefik)
- **Rolling updates with zero downtime** → Ensures a seamless experience

## Takeaways

Although this is a relatively simple website, it was very valuable to code, build, and deploy all by myself, and leverage different services and technologies to build a polished, real-world application.

I am excited to continue building on this project and exploring more advanced features and optimizations in the future, especially when it comes to IaC.
