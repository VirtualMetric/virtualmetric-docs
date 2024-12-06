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

				// {type: "category", label: "CLI",
				// 	items: [{type: "autogenerated", dirName: "admin/cli"}],
				// },

				{type: "category", label: "Devices",
					items: [
						'admin/dev/http',
						'admin/dev/syslog',
						'admin/dev/tcp',
						'admin/dev/udp',
						'admin/dev/azure-mon',
						'admin/dev/estreamer',
						'admin/dev/ipfix',
						'admin/dev/kafka',
						'admin/dev/linux',
						'admin/dev/ms-sentinel',
						'admin/dev/nats',
						'admin/dev/netflow',
						'admin/dev/rabbitmq',
						'admin/dev/redis',
						'admin/dev/sflow',
						'admin/dev/smtp',
						'admin/dev/snmp-trap',
						'admin/dev/tftp',
						'admin/dev/windows',
					],
				},

				{type: "category", label: "Targets",
					items: [
						'admin/tgt/console',
						'admin/tgt/file',
						'admin/tgt/ms-sentinel',
						'admin/tgt/azure-blob-storage',
					],
				},

				'admin/routes',

				{type: "category", label: "Pipelines",
					items: [
						'admin/pipes/overview',
						'admin/pipes/source',
						'admin/pipes/target',

						{type: "category", label: "Processors",
							items: [{type: "autogenerated", dirName: "admin/pipes/proc"}],
						},

						'admin/pipes/conditional-running',
						'admin/pipes/handling-failures',
						'admin/pipes/handling-success',
					],
				},

				// {type: "category", label: "Templates",
				// 	items: [{type: "autogenerated", dirName: "admin/tmpl"}],
				// },

				// {type: "category", label: "Miscellaneous",
				// 	items: [
				// 		'admin/misc/normalization',
				// 		'admin/misc/disk-persistency',
				// 		'admin/misc/vectorized-processing',
				// 		'admin/misc/batching-support',
				// 	],
				// },
			],
		},

		{type: "category", label: "Reference",
			items: [{type: "autogenerated", dirName: "ref"}],
		},

		"glos",
	],

	tutorDocs: [
		'tutor/overview',
		'tutor/syslog-to-console',
		'tutor/syslog-to-parquet-file',
	],

	apiDocs: [
		{type: "autogenerated", dirName: "api"},
	],

	mockDocs: [
		{type: "autogenerated", dirName: "mock"},
	],
};

export default sidebars;
