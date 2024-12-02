import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
	userDocs: [
		"overview",

		{type: "category", label: "Administration",
			items: [
				'admin/intro',

				{type: "category", label: "CLI",
					items: [{type: "autogenerated", dirName: "admin/cli"}],
				},

				{type: "category", label: "Configuration",
					items: [{type: "autogenerated", dirName: "admin/config"}],
				},

				{type: "category", label: "System Objects",
					items: [{type: "autogenerated", dirName: "admin/obj"}],
				},

				{type: "category", label: "Processors",
					items: [{type: "autogenerated", dirName: "admin/proc"}],
				},

				{type: "category", label: "Routing",
					items: [
						'admin/route/overview',
						'admin/route/sources',
						'admin/route/destinations',
						'admin/route/pipelines',
						'admin/route/management',
					],
				},

				{type: "category", label: "Templates",
					items: [{type: "autogenerated", dirName: "admin/tmpl"}],
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
