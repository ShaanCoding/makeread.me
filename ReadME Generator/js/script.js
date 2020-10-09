Vue.use(VueMarkdown);

Vue.component('custom-input', {
    props: ['value', 'title', 'placeholder', 'brand'],
    template: `
  <div class="form-group">
    <label :for="title">
      <img v-if="brand" :src="'https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/'+brand+'.svg'" :alt="brand" height='30'> &nbsp;
      {{ title }}
    </label>
    <input type="text" class="form-control" :value="value" @input="$emit('input', $event.target.value)" :aria-describedby="title" :placeholder="placeholder" />
  </div>
  `
})

new Vue({
    el: '#app',
    data: function () {
        return {
            forced: false,
            tab: "header",
            data: {
                tableOfContent: true,
                enableHeaderImage: true,
                userName: "ShaanCoding",
                repoName: "ReadME-Generator",
                logoURL: "../images/logo.png",
                headLine: "ReadME Template Generator",
                catchPhrase: "An Awesome ReadME Generator To Jumpstart Your Projects!",
                exploreTheDocs: true,
                viewDemo: true,
                reportBug: true,
                requestFeature: true,

                downloadsBadge: true,
                contributorsBadge: true,
                forksBadge: false,
                starsBadge: false,
                issuesBadge: true,
                licenseBadge: true,

                showcaseURL: "../images/screenshot.png",
                aboutThisProject: "There are many great README templates available on GitHub, however, I didn't find one that really suit my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need.\n\nHere's why:\n\n* Your time should be focused on creating something amazing. A project that solves a problem and helps others\n* You shouldn't be doing the same tasks over and over like creating a README from scratch\n* You should element DRY principles to the rest of your life :smile:\n\nOf course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue.\n\nA list of commonly used resources that I find helpful are listed in the acknowledgements.",

                builtWith: "This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.",
                builtWithList: [],

                gettingStarted: "This is an example of how you may give instructions on setting up your project locally.\nTo get a local copy up and running follow these simple example steps.",
                prerequisites: "This is an example of how to list things you need to use the software and how to install them.\n\n* npm\n\n```sh\nnpm install npm@latest -g\n```",
                installation: "1. Get a free API Key at [https://example.com](https://example.com)\n\n2. Clone the repo\n\n```sh\ngit clone https://github.com/your_username_/Project-Name.git\n```\n\n3. Install NPM packages\n\n```sh\nnpm install\n```\n\n4. Enter your API in `config.js`\n\n```JS\nconst API_KEY = 'ENTER YOUR API';\n```",

                usage: "Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.\n\n_For more examples, please refer to the [Documentation](https://example.com)_",

                roadmap: true,
                roadmapDesc: "",

                contributing: true,
                contributingDesc: "",
                pullRequest: "1. Fork the Project\n2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)\n3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)\n4. Push to the Branch (`git push origin feature/AmazingFeature`)\n5. Open a Pull Request",

                license: true,
                licenseDesc: "",

                authors: [],
                
                acknowledgements: []
            },
            source: this.getSource(this.data),
        };
    },
    watch: {
        data: {
            deep: true,
            handler() {
                this.forced = false;
                this.source = this.getSource(this.data);
            }
        },
    },
    mounted: function(){
        this.source = this.getSource(this.data);
        this.initalizeButtons();
    },
    methods: {
        initalizeButtons() {
            this.data.authors.push({
                authorName: 'Shaan Khan',
                authorDesc: 'Comp Sci Student @UTS',
                authorURL: 'https://github.com/ShaanCoding/',
                authorContribution: 'Built ReadME Template'
            });

            this.data.acknowledgements.push({
                acknowledgementName: 'ShaanCoding',
                acknowledgementURL: 'https://github.com/ShaanCoding/'
            });

            this.data.acknowledgements.push({
                acknowledgementName: 'ImgShields',
                acknowledgementURL: 'https://shields.io/'
            });
        },
        addBuiltWith() {
            this.data.builtWithList.push({
                builtWithName: '',
                builtWithURL: ''
            });
        },
        addAuthor() {
            this.data.authors.push({
                authorName: '',
                authorDesc: '',
                authorURL: '',
                authorContribution: ''
            });
        },
        addAcknowledgement() {
            this.data.acknowledgements.push({
                acknowledgementName: '',
                acknowledgementURL: ''
            });
        },
        onKeyUp(event) {
            this.forced = true;
        },
        slugify(text) {
            return text.toString().toLowerCase()
                .replace(/\.+/g, '-dot-')
                .replace(/\s+/g, '')
                .replace(/[^\w\-]+/g, '')
                .replace(/\-\-+/g, '')
                .replace(/^-+/, '')
                .replace(/-+$/, '');
        },
        generateHeader : function (data) {
            source = '';

            source += "<br/>\n";
            source += "<p align=\"center\">\n";

            if(data.enableHeaderImage) {
                source += "  <a href=\"https://github.com/" + data.userName + "/" + data.repoName + "\">\n";
                source += "    <img src=\"" + data.logoURL + "\" alt=\"Logo\" width=\"80\" height=\"80\">\n";
                source += "  </a>\n\n";
            }

            if(data.headLine) {
                source += "  <h3 align=\"center\">" + data.headLine + "</h3>\n\n";
            }

            if(data.catchPhrase || data.exploreTheDocs || data.viewDemo || data.reportBug) {
                source += "  <p align=\"center\">\n";

                if(data.catchPhrase) {
                    source += "    " + data.catchPhrase + "\n";
                    source += "    <br/>\n"
                    source += "    <br/>\n"
                }
    
                if(data.exploreTheDocs) {
                    source += "    <a href=\"https://github.com/" + data.userName + "/" + data.repoName + "\"><strong>Explore the docs »</strong></a>\n";
                    source += "    <br/>\n"
                    source += "    <br/>\n"
                }
    
                if(data.viewDemo) {
                    source += "    <a href=\"https://github.com/" + data.userName + "/" + data.repoName + "\">View Demo</a>\n";
                    source += "    .\n";
                }
    
                if(data.reportBug) {
                    source += "    <a href=\"https://github.com/" + data.userName + "/" + data.repoName + "/issues\">Report Bug</a>\n";
                    source += "    .\n";
                }
    
                if(data.requestFeature) {
                    source += "    <a href=\"https://github.com/" + data.userName + "/" + data.repoName + "/issues\">Request Feature</a>\n";
                }
                
                source += "  </p>\n";
            }

            source += "</p>\n";

            return source;
        },
        getCheckboxes : function (data) {
            source = '';

            source += "\n";
            
            if(data.downloadsBadge) {
                source += "![Downloads](https://img.shields.io/github/downloads/" + data.userName + "/" + data.repoName + "/total)";
            }

            if(data.contributorsBadge) {
                source += " ![Contributors](https://img.shields.io/github/contributors/" + data.userName + "/" + data.repoName + "?color=dark-green)";
            }

            if(data.forksBadge) {
                source += " ![Forks](https://img.shields.io/github/forks/" + data.userName + "/" + data.repoName + "?style=social) ";
            }

            if(data.starsBadge) {
                source += " ![Stargazers](https://img.shields.io/github/stars/" + data.userName + "/" + data.repoName + "?style=social) ";
            }

            if(data.issuesBadge) {
                source += " ![Issues](https://img.shields.io/github/issues/" + data.userName + "/" + data.repoName + ") ";
            }

            if(data.licenseBadge) {
                source += " ![License](https://img.shields.io/github/license/" + data.userName + "/" + data.repoName + ") ";
            }

            source += "\n";

            source += this.generateTableOfContent(data);

            return source;
        },
        generateTableOfContent: function (data) {
            source = '';

            if(data.tableOfContent) {
                source += "\n## Table Of Contents\n\n";

                if(data.showcaseURL || data.aboutThisProject) {
                    source += "* [About the Project](#about-the-project)\n";
                }

                if(data.builtWith || data.builtWithList.length > 0) {
                    source += "* [Built With](#built-with)\n";
                }

                if(data.gettingStarted || data.prerequisites || data.installation) {
                    source += "* [Getting Started](#getting-started)\n";
                }

                if(data.prerequisites) {
                    source += "  * [Prerequisites](#prerequisites)\n";
                }
                if(data.installation) {
                    source += "  * [Installation](#installation)\n";
                }

                if(data.usage) {
                    source += "* [Usage](#usage)\n";
                }

                if(data.roadmap || data.roadmapDesc) {
                    source += "* [Roadmap](#roadmap)\n";
                }

                if(data.contributing || data.contributingDesc || data.pullRequest) {
                    source += "* [Contributing](#contributing)\n";
                }

                if(data.license || data.licenseDesc) {
                    source += "* [License](#license)\n";
                }

                source += "* [Contact](#contact)\n";
                source += "* [Acknowledgements](#acknowledgements)\n";
            }

            return source;
        },
        getAboutThisProject: function (data) {
            source = '';

            if(data.showcaseURL || data.aboutThisProject) {
                source += "\n## About The Project\n\n";

                if(data.showcaseURL) {
                    source += "![Screen Shot](" + data.showcaseURL + ")\n\n";
                }
    
                if(data.aboutThisProject) {
                    source += data.aboutThisProject + "\n";
                }
            }

            return source;
        },
        builtWith: function (data) {
            source = '';

            if(data.builtWith || data.builtWithList.length > 0) {
                source += "\n## Built With\n\n";
                source += data.builtWith + "\n";
    
                if(data.builtWithList.length > 0) {
                    source += "\n";
                }

                for(i = 0; i < data.builtWithList.length; i++) {
                    source += "* [" + data.builtWithList[i].builtWithName + "](" + data.builtWithList[i].builtWithURL + ")\n";
                }
            }

            return source;
        },
        gettingStarted: function (data) {
            source = '';

            if(data.gettingStarted || data.prerequisites || data.installation) {
                source += "\n## Getting Started\n\n";

                if(data.gettingStarted) {
                    source += data.gettingStarted + "\n";
                }
    
                if(data.prerequisites) {
                    source += "\n### Prerequisites\n\n";
                    source += data.prerequisites + "\n";
                }
    
                if(data.installation) {
                    source += "\n### Installation\n\n";
                    source += data.installation + "\n";
                }
            }

            return source;
        },
        getUsage: function (data) {
            source = '';

            if(data.usage) {
                source += "\n## Usage\n\n";
                source += data.usage + "\n";
            }

            return source;
        },
        getRoadmap: function (data) {
            source = '';

            if(data.roadmap || data.roadmapDesc) {
                sourceDesc = '';

                if(data.roadmap) {
                    sourceDesc = "See the [open issues](https://github.com/" + data.userName + "/" + data.repoName + "/issues) for a list of proposed features (and known issues).\n";
                }
    
                source += "\n## Roadmap\n\n";

                if(data.roadmap) {
                    source += sourceDesc;
                }
                else {
                    source += data.roadmapDesc + "\n";
                }
            }

            return source;
        },
        getContributing: function (data) {
            source = '';

            if(data.contributing || data.contributingDesc || data.pullRequest) {
                sourceDesc = '';

                if(data.contributing) {
                    sourceDesc += "Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.\n";
                    sourceDesc += "* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/" + data.userName + "/" + data.repoName + "/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.";
                    sourceDesc += "* Please make sure you check your spelling and grammar.\n";
                    sourceDesc += "* Create individual PR for each suggestion.\n";
                    sourceDesc += "* Please also read through the [Code Of Conduct](https://github.com/" + data.userName + "/" + data.repoName + "/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.\n";
                }

                source += "\n## Contributing\n\n";
                if(data.contributing) {
                    source += sourceDesc;
                }
                else {
                    source += data.contributingDesc + "\n";
                }
            }

            return source;
        },
        getCreatingAPullRequest: function (data) {
            source = '';

            source += "\n### Creating A Pull Request\n\n";
            source += data.pullRequest + "\n";

            return source;
        },
        getLicense: function (data) {
            source = '';

            if(data.license || data.licenseDesc) {
                source += "\n## License\n\n";

                if(data.license) {
                    source += "Distributed under the MIT License. See [LICENSE](https://github.com/" + data.userName + "/" + data.repoName + "/blob/main/LICENSE.md) for more information.\n";    
                }
                else {
                    source += data.licenseDesc + "\n";
                }
            }

            return source;
        },
        getAuthors: function (data) {
            source = '';

            source += "\n## Authors\n\n";

            for(i = 0; i < data.authors.length; i++) {
                source += "* **" + data.authors[i].authorName + "** - *" + data.authors[i].authorDesc + "* - [" + data.authors[i].authorName + "](" + data.authors[i].authorURL + ") - *" + data.authors[i].authorContribution + "*\n"; 
            }

            return source;
        },
        getAcknowledgements: function (data) {
            source = '';

            source += "\n## Acknowledgements\n\n";

            for(i = 0; i < data.acknowledgements.length; i++) {
                source += "* [" + data.acknowledgements[i].acknowledgementName + "](" + data.acknowledgements[i].acknowledgementURL + ")\n";
            }

            return source;
        },
        getSource: function (data) {
            let source = '';

            if (data) {
                source += this.generateHeader(data);
                source += this.getCheckboxes(data);
                source += this.getAboutThisProject(data);
                source += this.builtWith(data);
                source += this.gettingStarted(data);
                source += this.getUsage(data);
                source += this.getRoadmap(data);
                source += this.getContributing(data);
                source += this.getCreatingAPullRequest(data);
                source += this.getLicense(data);
                source += this.getAuthors(data);
                source += this.getAcknowledgements(data);
            }

            return source;
        },
        copyCode() {
            this.$refs.code.select();
            document.execCommand("copy");
        }
    }
});

Vue.component('resizable-textarea', {
    methods: {
      resizeTextarea (event) {
        event.target.style.height = 'auto'
        event.target.style.height = (event.target.scrollHeight) + 'px'
      },
    },
    mounted () {
      this.$nextTick(() => {
        this.$el.setAttribute('style', 'height:' + (this.$el.scrollHeight) + 'px;overflow-y:hidden;')
      })
  
      this.$el.addEventListener('input', this.resizeTextarea)
    },
    beforeDestroy () {
      this.$el.removeEventListener('input', this.resizeTextarea)
    },
    render () {
      return this.$slots.default[0]
    },
  });
