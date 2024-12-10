import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
	userDocs: [
		"intro",
		"overview",
		"product-info",

		{type: "category", label: "Administration",
			items: [
				'admin/intro',

				// {type: "category", label: "Configuration",
				// 	items: [{type: "autogenerated", dirName: "admin/config"}],
				// },

				{type: "category", label: "CLI",
					items: [{type: "autogenerated", dirName: "admin/cli"}],
				},

				{type: "category", label: "Devices",
					items: [
						'admin/devices/http',
						'admin/devices/syslog',
						'admin/devices/tcp',
						'admin/devices/udp',
						'admin/devices/azure-mon',
						'admin/devices/estreamer',
						'admin/devices/ipfix',
						'admin/devices/kafka',
						'admin/devices/linux',
						'admin/devices/ms-sentinel',
						'admin/devices/nats',
						'admin/devices/netflow',
						'admin/devices/rabbitmq',
						'admin/devices/redis',
						'admin/devices/sflow',
						'admin/devices/smtp',
						'admin/devices/snmp-trap',
						'admin/devices/tftp',
						'admin/devices/windows',
					],
				},

				{type: "category", label: "Targets",
					items: [
						'admin/targets/console',
						'admin/targets/file',
						'admin/targets/ms-sentinel',
						'admin/targets/azure-blob-storage',
					],
				},

				'admin/routes',

				{type: "category", label: "Pipelines",
					items: [
						'admin/pipelines/overview',
						'admin/pipelines/source',
						'admin/pipelines/target',

						{type: "category", label: "Processors",
							items: [{type: "autogenerated", dirName: "admin/pipelines/processors"}],
						},

						'admin/pipelines/conditional-running',
						'admin/pipelines/handling-failures',
						'admin/pipelines/handling-success',
					],
				},

				{type: "category", label: "Templates",
					items: [{type: "autogenerated", dirName: "admin/templates"}],
				},

				{type: "category", label: "Miscellaneous",
					items: [
						'admin/misc/normalization',
						'admin/misc/disk-persistency',
						'admin/misc/vectorized-processing',
						'admin/misc/batching-support',
					],
				},
			],
		},

		{type: "category", label: "Reference",
			items: [{type: "autogenerated", dirName: "reference"}],
		},

		"glossary",
	],

	tutorDocs: [
		'tutorials/overview',
		'tutorials/syslog-to-console',
		'tutorials/syslog-to-parquet-file',
	],

	// apiDocs: [
	// 	{type: "autogenerated", dirName: "api"},
	// ],

	// mockDocs: [
	// 	{type: "autogenerated", dirName: "mock"},
	// ],
};

export default sidebars;
