import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  userDocs: [
    {
      type: "category",
      label: "About",
      collapsed: false,
      items: [
        "about/product",
        "about/applications",
        "about/key-features",
        "about/benchmarks",
        // {
        //   type: "category",
        //   label: "Comparisons",
        //   items: [
        //     "about/comparisons/overview",
        //     "about/comparisons/cribl",
        //     "about/comparisons/logstash",
        //     "about/comparisons/tenzir",
        //     "about/comparisons/vector",
        //   ]
        // },
        "about/licensing",
        // 'about/release-notes',
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "getting-started/introduction",
        "getting-started/single-node-deployment-director",
        "getting-started/single-node-deployment-agent",
        {
          type: "category",
          label: "Examples",
          collapsed: false,
          items: [
            "getting-started/examples/user-notes",
            "getting-started/examples/example-ingesting-data",
            "getting-started/examples/example-secure-ingestion",
            "getting-started/examples/example-forwarding-data",
            "getting-started/examples/example-reading-json-with-a-pipeline",
            "getting-started/examples/example-a-syslog-to-json-data-stream",
            "getting-started/examples/example-centralized-log-collection-with-agent",
            "getting-started/examples/example-service-management-with-supervisor",
          ]
        },
      ],
    },
    {
      type: "category",
      label: "GUI",
      collapsed: false,
      items: [
        "gui/home",
        {
          type: "category",
          label: "Accounts",
          items: [
            "gui/accounts/overview",
            "gui/accounts/creating-accounts",
            "gui/accounts/managing-accounts",
          ]
        },
        {
          type: "category",
          label: "Fleet Management",
          items: [
            {
              type: "category",
              label: "Directors",
              items: [
                "gui/fleet-management/directors/overview",
                "gui/fleet-management/directors/creating-directors",
                "gui/fleet-management/directors/managing-directors",
              ]
            },
            {
              type: "category",
              label: "Devices",
              items: [
                "gui/fleet-management/devices/overview",
                "gui/fleet-management/devices/creating-devices",
                "gui/fleet-management/devices/creating-agents",
                "gui/fleet-management/devices/managing-devices",
              ]
            },
            {
              type: "category",
              label: "Targets",
              items: [
                "gui/fleet-management/targets/overview",
                "gui/fleet-management/targets/creating-targets",
                "gui/fleet-management/targets/managing-targets",
              ]
            }
          ]
        },
        {
          type: "category",
          label: "Pipelines",
          items: [
            "gui/pipelines/overview",
            "gui/pipelines/creating-pipelines",
            "gui/pipelines/managing-pipelines",
          ]
        },
        {
          type: "category",
          label: "Routes",
          items: [
            "gui/routes/overview",
            {
              type: "category",
              label: "Quick Routes",
              items: [
                "gui/routes/quick-routes/creating-quick-routes",
                "gui/routes/quick-routes/managing-quick-routes",
              ]
            },
            {
              type: "category",
              label: "Advanced Routes",
              items: [
                "gui/routes/advanced-routes/creating-advanced-routes",
                "gui/routes/advanced-routes/managing-advanced-routes",
              ]
            }
          ]
        },
        {
          type: "category",
          label: "Content Hub",
          items: [
            "gui/content-hub/overview",
            "gui/content-hub/azure-sentinel-integration",
            "gui/content-hub/installing-solutions",
            "gui/content-hub/managing-solutions",
          ]
        },
        {
          type: "category",
          label: "Organization",
          items: [
            {
              type: "category",
              label: "Users",
              items: [
                "gui/organization/users/overview",
                "gui/organization/users/creating-users",
                "gui/organization/users/managing-users",
              ]
            },
            {
              type: "category",
              label: "Roles",
              items: [
                "gui/organization/roles/overview",
                "gui/organization/roles/creating-roles",
                "gui/organization/roles/managing-roles",
              ]
            },
            "gui/organization/audit",
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Microsoft Sentinel",
      items: [
        "microsoft-sentinel/overview",
        {
          type: "category",
          label: "Integration",
          link: {
            type: "generated-index",
            title: "Microsoft Sentinel: Integration",
            description: "The following documents contain detailed information on this topic."
          },
          items: [
            "microsoft-sentinel/integration/manual",
            "microsoft-sentinel/integration/via-autodiscovery",
          ],
        },
        {
          type: "category",
          label: "Automation",
          link: {
            type: "generated-index",
            title: "Microsoft Sentinel: Automation",
            description: "The following documents contain detailed information on this topic."
          },
          items: [
            "microsoft-sentinel/automation/arm-templates",
            "microsoft-sentinel/automation/bicep-templates",
          ],
        },
        {
          type: "category",
          label: "Content Hub",
          link: {
            type: "generated-index",
            title: "Microsoft Sentinel: Content Hub",
            description: "The following documents contain detailed information on this topic."
          },
          items: [
            "microsoft-sentinel/content-hub/checkpoint",
            "microsoft-sentinel/content-hub/fortigate",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Deployment",
      items: [
        "deployment/overview",
        "deployment/on-local",
        "deployment/as-cluster",
        "deployment/on-azure-vm",
        "deployment/on-azure-app-service",
        "deployment/on-azure-functions",
        "deployment/via-azure-arc-extension",
      ],
    },
    {
      type: "category",
      label: "Configuration",
      items: [
        "configuration/overview",
        {
          type: "category",
          label: "Devices",
          items: [
            "configuration/devices/overview",
            "configuration/devices/azure-monitor",
            "configuration/devices/estreamer",
            "configuration/devices/http",
            "configuration/devices/ipfix",
            "configuration/devices/kafka",
            "configuration/devices/linux",
            "configuration/devices/microsoft-sentinel",
            "configuration/devices/nats",
            "configuration/devices/netflow",
            "configuration/devices/rabbitmq",
            "configuration/devices/redis",
            "configuration/devices/sflow",
            "configuration/devices/smtp",
            "configuration/devices/snmp-trap",
            "configuration/devices/syslog",
            "configuration/devices/tcp",
            "configuration/devices/tftp",
            "configuration/devices/udp",
            "configuration/devices/windows",
          ],
        },
        {
          type: "category",
          label: "Targets",
          items: [
            "configuration/targets/overview",
            "configuration/targets/azure-blob-storage",
            "configuration/targets/azure-data-explorer",
            "configuration/targets/clickhouse",
            "configuration/targets/console",
            "configuration/targets/discard",
            "configuration/targets/elasticsearch",
            "configuration/targets/file",
            "configuration/targets/microsoft-sentinel",
            "configuration/targets/splunk-hec",
            "configuration/targets/syslog",
          ],
        },
        {
          type: "category",
          label: "Pipelines",
          items: [
            "configuration/pipelines/overview",
            "configuration/pipelines/normalization",
            "configuration/pipelines/conditional-running",
            "configuration/pipelines/handling-failures",
            "configuration/pipelines/handling-success",
            {
              type: "category",
              label: "Processors",
              items: [
                "configuration/pipelines/processors/overview",
                "configuration/pipelines/processors/aad-errcode",
                "configuration/pipelines/processors/abs",
                "configuration/pipelines/processors/add",
                "configuration/pipelines/processors/alienvault",
                "configuration/pipelines/processors/anthropic",
                "configuration/pipelines/processors/append",
                "configuration/pipelines/processors/attachment",
                "configuration/pipelines/processors/azure-openai",
                "configuration/pipelines/processors/bag-pack",
                "configuration/pipelines/processors/bytes",
                "configuration/pipelines/processors/capitalize",
                "configuration/pipelines/processors/case",
                "configuration/pipelines/processors/cef",
                "configuration/pipelines/processors/ceil",
                "configuration/pipelines/processors/circle",
                "configuration/pipelines/processors/cloudflare-intel",
                "configuration/pipelines/processors/clean",
                "configuration/pipelines/processors/comment",
                "configuration/pipelines/processors/coalesce",
                "configuration/pipelines/processors/confidence",
                "configuration/pipelines/processors/community-id",
                "configuration/pipelines/processors/compact",
                "configuration/pipelines/processors/concat",
                "configuration/pipelines/processors/contains",
                "configuration/pipelines/processors/convert",
                "configuration/pipelines/processors/cpid",
                "configuration/pipelines/processors/csv",
                "configuration/pipelines/processors/date-index",
                "configuration/pipelines/processors/date",
                "configuration/pipelines/processors/debug",
                "configuration/pipelines/processors/decrypt",
                "configuration/pipelines/processors/dissect",
                "configuration/pipelines/processors/divide",
                "configuration/pipelines/processors/dns-lookup",
                "configuration/pipelines/processors/dns-query-type",
                "configuration/pipelines/processors/dns-response-code",
                "configuration/pipelines/processors/dot-expander",
                "configuration/pipelines/processors/dot-nester",
                "configuration/pipelines/processors/drop",
                "configuration/pipelines/processors/duration",
                "configuration/pipelines/processors/dynamic-sample",
                "configuration/pipelines/processors/encrypt",
                "configuration/pipelines/processors/enforce-schema",
                "configuration/pipelines/processors/enrich",
                "configuration/pipelines/processors/fail",
                "configuration/pipelines/processors/final",
                "configuration/pipelines/processors/fingerprint",
                "configuration/pipelines/processors/floor",
                "configuration/pipelines/processors/foreach",
                "configuration/pipelines/processors/fqdn",
                "configuration/pipelines/processors/geo-grid",
                "configuration/pipelines/processors/geo-ip",
                "configuration/pipelines/processors/grok",
                "configuration/pipelines/processors/group",
                "configuration/pipelines/processors/gsub",
                "configuration/pipelines/processors/html-strip",
                "configuration/pipelines/processors/http-status",
                "configuration/pipelines/processors/icmp-type",
                "configuration/pipelines/processors/iff",
                "configuration/pipelines/processors/ip-quality-score",
                "configuration/pipelines/processors/ip-type",
                "configuration/pipelines/processors/join-kv",
                "configuration/pipelines/processors/join",
                "configuration/pipelines/processors/json",
                "configuration/pipelines/processors/keep",
                "configuration/pipelines/processors/kv",
                "configuration/pipelines/processors/leef",
                "configuration/pipelines/processors/level",
                "configuration/pipelines/processors/lookup",
                "configuration/pipelines/processors/lowercase",
                "configuration/pipelines/processors/mask",
                "configuration/pipelines/processors/math",
                "configuration/pipelines/processors/max",
                "configuration/pipelines/processors/min",
                "configuration/pipelines/processors/minify",
                "configuration/pipelines/processors/modulo",
                "configuration/pipelines/processors/move",
                "configuration/pipelines/processors/multiply",
                "configuration/pipelines/processors/network-direction",
                "configuration/pipelines/processors/network-protocol",
                "configuration/pipelines/processors/normalize",
                "configuration/pipelines/processors/openai",
                "configuration/pipelines/processors/pattern",
                "configuration/pipelines/processors/pipeline",
                "configuration/pipelines/processors/power",
                "configuration/pipelines/processors/protocol",
                "configuration/pipelines/processors/redact",
                "configuration/pipelines/processors/regex-extract",
                "configuration/pipelines/processors/regex-filter",
                "configuration/pipelines/processors/regex-replace",
                "configuration/pipelines/processors/registered-domain",
                "configuration/pipelines/processors/remove",
                "configuration/pipelines/processors/rename",
                "configuration/pipelines/processors/reroute",
                "configuration/pipelines/processors/round",
                "configuration/pipelines/processors/sample",
                "configuration/pipelines/processors/score",
                "configuration/pipelines/processors/script",
                "configuration/pipelines/processors/select",
                "configuration/pipelines/processors/serialize",
                "configuration/pipelines/processors/set",
                "configuration/pipelines/processors/slice",
                "configuration/pipelines/processors/snowflake",
                "configuration/pipelines/processors/sort",
                "configuration/pipelines/processors/split",
                "configuration/pipelines/processors/sqrt",
                "configuration/pipelines/processors/subtract",
                "configuration/pipelines/processors/syslog",
                "configuration/pipelines/processors/take",
                "configuration/pipelines/processors/trim-first",
                "configuration/pipelines/processors/trim-last",
                "configuration/pipelines/processors/trim",
                "configuration/pipelines/processors/uppercase",
                "configuration/pipelines/processors/uri-parts",
                "configuration/pipelines/processors/url-decode",
                "configuration/pipelines/processors/user-agent",
                "configuration/pipelines/processors/username-type",
                "configuration/pipelines/processors/virustotal",
                "configuration/pipelines/processors/wait",
                "configuration/pipelines/processors/windows-user-type",
                "configuration/pipelines/processors/xml",
              ],
            },
          ],
        },
        'configuration/routes',
      ],
    },
    // {
    //   type: "category",
    //   label: "Architecture",
    //   items: [
    //     "architecture/overview",
    //     "architecture/clustering",
    //     "architecture/file-system",
    //     "architecture/persistency",
    //     "architecture/zero-trust",
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "Migration",
    //   link: {type: "doc", id: "migration/index"},
    //   items: [
    //     "migration/cribl",
    //     "migration/logstash",
    //     "migration/tenzir",
    //     "migration/vector",
    //   ],
    // },
    {
      type: "category",
      label: "Appendix",
      link: {
        type: "generated-index",
        title: "Appendix",
        description: "Reference information on various topics."
      },
      items: [
        "appendix/configuration-bnf",
        {
          type: "category",
          label: "CLI",
          items: [
            "appendix/cli/director",
            // "appendix/cli/generator",
            "appendix/cli/agent",
          ]
        },
        {
          type: "category",
          label: "File Formats",
          link: {
            type: "generated-index",
            description: "Storage file format specifications"
          },
          items: [
            "appendix/file-formats/avro",
            "appendix/file-formats/parquet",
            "appendix/file-formats/pem",
          ],
        },
        {
          type: "category",
          label: "Log Formats",
          link: {
            type: "generated-index",
            description: "Log format specifications"
          },
          items: [
            "appendix/log-formats/asim",
            "appendix/log-formats/cef",
            "appendix/log-formats/cim",
            "appendix/log-formats/ecs",
            "appendix/log-formats/estreamer",
            "appendix/log-formats/ipfix",
            "appendix/log-formats/leef",
            "appendix/log-formats/netflow",
            "appendix/log-formats/sflow",
          ],
        },
        {
          type: "category",
          label: "Protocols",
          link: {
            type: "generated-index",
            description: "Protocol specifications"
          },
          items: [
            "appendix/protocols/kafka",
            "appendix/protocols/nats",
            "appendix/protocols/rabbitmq",
            "appendix/protocols/redis",
            "appendix/protocols/smtp",
            "appendix/protocols/syslog",
            "appendix/protocols/tftp",
          ],
        },
        "appendix/agent-names",
      ],
    },
    "glossary"
  ],
  tutorDocs: [
    "tutorials/user-notes",
    "tutorials/a-local-pipeline",
    "tutorials/kafka-to-parquet-pipeline",
    "tutorials/microsoft-sentinel-advanced-integration",
    "tutorials/rabbitmq-threat-intelligence",
    "tutorials/multi-source-log-correlation",
    "tutorials/high-volume-sampling-strategies",
    "tutorials/advanced-netflow-processing",
    "tutorials/ai-powered-log-analysis",
  ],  
};

export default sidebars;
