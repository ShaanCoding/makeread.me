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
                userName: "",
                repoName: "",
                logoURL: "",
                headLine: "",
                catchPhrase: "",

                tableOfContent: false,
                downloadsBadge: false,
                contributorsBadge: false,
                forksBadge: false,
                starsBadge: false,
                issuesBadge: false,
                licenseBadge: false,

                showcaseURL: "",
                aboutThisProject: "",

                builtWith: "",

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
        this.addItem();
    },
    methods: {
        addAuthor() {
            this.data.authors.push({
                value: '',
                icon: ''
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
        getSource: function (data) {
            let source = '';

            if (data) {

                if(data.licenseBadge) {
                    source += "BAZINGA";
                }

                for(i = 0; i < authors.length; i++) {
                    source += authors[i] + " Hello";
                }

            }

            return source;
        },
        copyCode() {
            this.$refs.code.select();
            document.execCommand("copy");
        }
    }
});
