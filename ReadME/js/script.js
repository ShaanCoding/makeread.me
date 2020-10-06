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
                userName: "ShaanCoding",
                repoName: "ReadME-Generator",
                logoURL: "https://github.com/ShaanCoding/ReadME-Generator/tree/main/images/logo.png",
                headLine: "ReadME Template Generator",
                catchPhrase: "An Awesome ReadME Template To Jumpstart Your Projects!",

                tableOfContent: true,
                downloadsBadge: true,
                contributorsBadge: true,
                forksBadge: true,
                starsBadge: true,
                issuesBadge: true,
                licenseBadge: true,

                showcaseURL: "https://github.com/ShaanCoding/ReadME-Generator/tree/main/images/screenshot.png",
                aboutThisProject: "There are many great README templates available on GitHub, however, I didn't find one that really suit my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need.\n\nHere's why:\n\n* Your time should be focused on creating something amazing. A project that solves a problem and helps others\n* You shouldn't be doing the same tasks over and over like creating a README from scratch\n* You should element DRY principles to the rest of your life :smile:\n\nOf course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue.\n\nA list of commonly used resources that I find helpful are listed in the acknowledgements.",

                builtWith: "This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.\n\n* [Bootstrap](https://getbootstrap.com)\n* [JQuery](https://jquery.com)\n* [Laravel](https://laravel.com)",

                gettingStarted: "",
                prerequisites: "",
                installation: "",

                usage: "",

                roadmap: "",

                contributing: "",
                pullRequest: "",

                license: "",

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
        this.addAuthor();
        this.addAcknowledgement();
    },
    methods: {
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
            //Refactor to take LogoURL
            source += "<p align=\"center\">\n";
            source += "<a href=\"https://github.com/" + data.userName + "/" + data.repoName + "\">\n";
            source += "    <img src=\"" + data.logoURL + "\" alt=\"Logo\" width=\"80\" height=\"80\">\n";
            source += "</a>\n\n";

            source += "<h3 align=\"center\">" + data.headLine + "</h3>\n\n";

            source += "<p align=\"center\">\n";
            source += data.catchPhrase + "\n";
            source += "<br/>\n"
            source += "<br/>\n"
            
            source += "<a href=\"https://github.com/" + data.userName + "/" + data.repoName + "\"><strong>Explore the docs »</strong></a>\n";

            source += "<br/>\n"
            source += "<br/>\n"

            source += "<a href=\"https://github.com/" + data.userName + "/" + data.repoName + "\">View Demo</a>\n";
            source += ".\n";
            source += "<a href=\"https://github.com/" + data.userName + "/" + data.repoName + "/issues\">Report Bug</a>\n";
            source += ".\n";
            source += "<a href=\"https://github.com/" + data.userName + "/" + data.repoName + "/issues\">Request Feature</a>\n";
            source += "</p>\n";
            source += "</p>\n";

            return source;
        },
        getCheckboxes : function (data) {
            source = '';

            source += "\n";
            
            if(data.downloadsBadge) {
                source += "![Downloads](https://img.shields.io/github/downloads/shaancoding/ReadME-Generator/total)";
            }

            if(data.contributorsBadge) {
                source += " ![Contributors](https://img.shields.io/github/contributors/ShaanCoding/ReadME-Generator?color=dark-green)";
            }

            if(data.forksBadge) {
                source += " ![Forks](https://img.shields.io/github/forks/shaancoding/ReadME-Generator?style=social) ";
            }

            if(data.starsBadge) {
                source += " ![Stargazers](https://img.shields.io/github/stars/shaancoding/ReadME-Generator?style=social) ";
            }

            if(data.issuesBadge) {
                source += " ![Issues](https://img.shields.io/github/issues/shaancoding/ReadME-Generator) ";
            }

            if(data.licenseBadge) {
                source += " ![License](https://img.shields.io/github/license/shaancoding/ReadME-Generator) ";
            }

            source += "\n";

            if(data.tableOfContent) {
                source += "\n## Summary\n\n";
                source += "* [About the Project](#about-the-project)\n";
                source += "* [Built With](#built-with)\n";
                source += "* [Getting Started](#getting-started)\n";
                source += "* [Prerequisites](#prerequisites)\n";
                source += "* [Installation](#installation)\n";
                source += "* [Usage](#usage)\n";
                source += "* [Roadmap](#roadmap)\n";
                source += "* [Contributing](#contributing)\n";
                source += "* [License](#license)\n";
                source += "* [Contact](#contact)\n";
                source += "* [Acknowledgements](#acknowledgements)\n";
            }

            return source;
        },
        getAboutThisProject: function (data) {
            source = '';

            source += "\n## About The Project\n\n";
            if(data.showcaseURL) {
                source += "![Screen Shot](" + data.showcaseURL + ")\n\n";
            }

            if(data.aboutThisProject) {
                source += data.aboutThisProject + "\n";
            }

            return source;
        },
        builtWith: function (data) {
            source = '';

            source += "\n## Built With\n\n";
            source += data.builtWith + "\n";

            return source;
        },
        gettingStarted: function (data) {
            source = '';

            source += "\n## Getting Started\n\n";
            source += data.gettingStarted + "\n";



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
            }

            return source;
        },
        copyCode() {
            this.$refs.code.select();
            document.execCommand("copy");
        }
    }
});
