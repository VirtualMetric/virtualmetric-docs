import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  userDocs: [
    "README",
    "features",
    "getting-started",

    {
      type: "category",
      label: "Administration",
      link: {type: "doc", id: "administration/index"},
      items: [
        {
          type: "category",
          label: "Devices",
          link: {type: "doc", id: "administration/devices/index"},
          items: [
            "administration/devices/quick-start",
            "administration/devices/windows",
            "administration/devices/linux",
            "administration/devices/syslog",
            "administration/devices/snmp-trap",
            "administration/devices/estreamer",
            "administration/devices/http",
            "administration/devices/tcp",
            "administration/devices/udp",
            "administration/devices/smtp",
            "administration/devices/tftp",
            "administration/devices/kafka",
            "administration/devices/nats",
            "administration/devices/rabbitmq",
            "administration/devices/redis",
            "administration/devices/netflow",
            "administration/devices/sflow",
            "administration/devices/ipfix",
            "administration/devices/ms-sentinel",
            "administration/devices/azure-monitor",
          ],
        },
        {
          type: "category",
          label: "Pipelines",
          link: {type: "doc", id: "administration/pipelines/index"},
          items: [
            "administration/pipelines/quick-start",
            "administration/pipelines/pre-processing",
            "administration/pipelines/normalization",
            "administration/pipelines/post-processing",
            {
              type: "category",
              label: "Processors",
              link: {type: "doc", id: "administration/pipelines/processors/index"},
              items: [
                "administration/pipelines/processors/append",
                "administration/pipelines/processors/attachment",
                "administration/pipelines/processors/bytes",
                "administration/pipelines/processors/cef",
                "administration/pipelines/processors/circle",
                "administration/pipelines/processors/community_id",
                "administration/pipelines/processors/compact",
                "administration/pipelines/processors/contains",
                "administration/pipelines/processors/convert",
                "administration/pipelines/processors/csv",
                "administration/pipelines/processors/date",
                "administration/pipelines/processors/date_index_name",
                "administration/pipelines/processors/decrypt",
                "administration/pipelines/processors/dissect",
                "administration/pipelines/processors/dot_expander",
                "administration/pipelines/processors/dot_nester",
                "administration/pipelines/processors/drop",
                "administration/pipelines/processors/encrypt",
                "administration/pipelines/processors/enrich",
                "administration/pipelines/processors/fail",
                "administration/pipelines/processors/final",
                "administration/pipelines/processors/fingerprint",
                "administration/pipelines/processors/foreach",
                "administration/pipelines/processors/geo_grid",
                "administration/pipelines/processors/geoip",
                "administration/pipelines/processors/grok",
                "administration/pipelines/processors/gsub",
                "administration/pipelines/processors/html_strip",
                "administration/pipelines/processors/join",
                "administration/pipelines/processors/json",
                "administration/pipelines/processors/kv",
                "administration/pipelines/processors/leef",
                "administration/pipelines/processors/lowercase",
                "administration/pipelines/processors/move",
                "administration/pipelines/processors/network_direction",
                "administration/pipelines/processors/normalize",
                "administration/pipelines/processors/pipeline",
                "administration/pipelines/processors/redact",
                "administration/pipelines/processors/registered_domain",
                "administration/pipelines/processors/remove",
                "administration/pipelines/processors/rename",
                "administration/pipelines/processors/reroute",
                "administration/pipelines/processors/script",
                "administration/pipelines/processors/set",
                "administration/pipelines/processors/sort",
                "administration/pipelines/processors/split",
                "administration/pipelines/processors/syslog",
                "administration/pipelines/processors/trim",
                "administration/pipelines/processors/uppercase",
                "administration/pipelines/processors/uri_parts",
                "administration/pipelines/processors/urldecode",
                "administration/pipelines/processors/user_agent",
              ],
            },
            "administration/pipelines/conditional-running",
            "administration/pipelines/handling-failures",
            "administration/pipelines/handling-success",
          ],
        },
        {
          type: "category",
          label: "Routes",
          link: {type: "doc", id: "administration/routes/index"},
          items: [
            'administration/routes/quick-start',
            'administration/routes/management',
          ],
        },
        {
          type: "category",
          label: "Targets",
          link: {type: "doc", id: "administration/targets/index"},
          items: [
            "administration/targets/quick-start",
            "administration/targets/ms-sentinel",
            "administration/targets/azure-data-explorer",
            "administration/targets/azure-blob-storage",
            "administration/targets/splunk-hec",
            "administration/targets/elasticsearch",
            "administration/targets/file",
            "administration/targets/syslog",
            "administration/targets/console",
            "administration/targets/discard",
          ],
        },
      ],
    },
    "appendix",
    "glossary"
  ],
  tutorDocs: [
    "tutorials/quick-start",
    // "tutorials/syslog-to-console",
    // "tutorials/syslog-to-parquet-file",
  ],
};

export default sidebars;
