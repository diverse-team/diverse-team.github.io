---
name: Awesome Tool
repository: https://github.com/awesome/tool
site: https://www.awesome.tool

order: {{ with .Site.GetPage "/software" }}{{ len .Resources }}{{ end }}
---

This is the most awesome tool you will ever use.