import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  userDocs: [
    "intro",
    "product-info",

    {
      type: "category",
      label: "Features",
      link: {type: "doc", id: "admin/features/overview"},
      items: [
        "admin/features/disk-persistency",
        "admin/features/vectorized-processing",
        "admin/features/batching-support",
      ],
    },

    {
      type: "category",
      label: "Administration",
      link: {type: "doc", id: "admin/overview"},
      items: [
        "admin/quick-start",

        {
          type: "category",
          label: "Devices",
          link: {type: "doc", id: "admin/devices/overview"},
          items: [
            "admin/devices/quick-start",
            "admin/devices/http",
            "admin/devices/syslog",
            "admin/devices/tcp",
            "admin/devices/udp",
            "admin/devices/azure-mon",
            "admin/devices/estreamer",
            "admin/devices/ipfix",
            "admin/devices/kafka",
            "admin/devices/linux",
            "admin/devices/ms-sentinel",
            "admin/devices/nats",
            "admin/devices/netflow",
            "admin/devices/rabbitmq",
            "admin/devices/redis",
            "admin/devices/sflow",
            "admin/devices/smtp",
            "admin/devices/snmp-trap",
            "admin/devices/tftp",
            "admin/devices/windows",
          ],
        },

        {
          type: "category",
          label: "Pipelines",
          link: {type: "doc", id: "admin/pipelines/overview"},
          items: [
            "admin/pipelines/quick-start",
            "admin/pipelines/normalization",
            "admin/pipelines/pre-processing",
            "admin/pipelines/post-processing",

            {
              type: "category",
              label: "Processors",
              items: [
                {
                  type: "autogenerated",
                  dirName: "admin/pipelines/processors",
                },
              ],
            },

            "admin/pipelines/conditional-running",
            "admin/pipelines/handling-failures",
            "admin/pipelines/handling-success",
          ],
        },

        {
          type: "category",
          label: "Routes",
          link: {type: "doc", id: "admin/routes/overview"},
          items: [
            'admin/routes/quick-start',
            'admin/routes/management'
          ],
        },

        {
          type: "category",
          label: "Targets",
          link: {type: "doc", id: "admin/targets/overview"},
          items: [
            "admin/targets/quick-start",
            "admin/targets/console",
            "admin/targets/file",
            "admin/targets/ms-sentinel",
            "admin/targets/azure-blob-storage",
          ],
        },

        {
          type: "category",
          label: "Templates",
          link: {type: "doc", id: "admin/templates/overview"},
          items: [
            'admin/templates/quick-start',
            'admin/templates/checkpoint'
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Reference",
      items: [{ type: "autogenerated", dirName: "reference" }],
    },

    "appendix",
    "glossary"
  ],

  tutorDocs: [
    "tutorials/quick-start",
    "tutorials/syslog-to-console",
    "tutorials/syslog-to-parquet-file",
  ],

  // apiDocs: [
  // 	{type: "autogenerated", dirName: "api"},
  // ],
};

export default sidebars;
