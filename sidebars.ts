import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
	userDocs: [
		"README",
		{type: "category", label: "Administration",
			items: [
				{type: "category", label: "Objects",
					items: [{type: "autogenerated", dirName: "usr/admin/obj"}],
				},

				{type: "category", label: "Routing",
					items: [{type: "autogenerated", dirName: "usr/admin/route"}],
				},

				{type: "category", label: "Processors",
					items: [{type: "autogenerated", dirName: "usr/admin/proc"}],
				},

				{type: "category", label: "Templates",
					items: [{type: "autogenerated", dirName: "usr/admin/tmpl"}],
				},

				{type: "category", label: "Miscellaneous",
					items: [{type: "autogenerated", dirName: "usr/admin/misc"}],
				},
			],
		},

		{type: "category", label: "Reference",
			items: [{type: "autogenerated", dirName: "usr/ref"}],
		},

		"glos",
	],

	cmdlnDocs: [
		"cli/README",

		{type: "category", label: "CLI Options",
			items: [{type: "autogenerated", dirName: "cli/opt"}],
		},

		{type: "category", label: "Tutorials",
			items: [{type: "autogenerated", dirName: "cli/tutor"}],
		},
	],

	apiDocs: [
		{type: "autogenerated", dirName: "api"},
	],

	mockDocs: [
		{type: "autogenerated", dirName: "mock"},
	],
};

export default sidebars;
