import { trpcReact } from "../../../App";

export default function useGetBlocks() {
  const context = trpcReact.useContext();

  const output = [
    {
      template: "Othniel Drew",
      blocks: [
        {
          name: "Header",
          importName: "projectHeader()",
          macro: `
{% macro projectHeader() %}
<br/>
<p align="center">
<a href="https://github.com/ShaanCoding/ReadME-Generator">
    <img src="https://github.com/ShaanCoding/ReadME-Generator/blob/readme-generator-2020/images/logo.png?raw=true" alt="Logo" width="80" height="80">
</a>

<h3 align="center">ReadME Generator</h3>

<p align="center">
    An Awesome ReadME Generator To Jumpstart Your Projects!
    <br/>
    Note This Project Is Still W.I.P
    <br/>
    <br/>
    <a href="https://readme.shaankhan.dev"><strong>View Demo »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/ShaanCoding/ReadME-Generator">Explore the docs</a>
    .
    <a href="https://github.com/ShaanCoding/ReadME-Generator/issues">Report Bug</a>
    .
    <a href="https://github.com/ShaanCoding/ReadME-Generator/issues">Request Feature</a>
</p>
</p>
{% endmacro %}
`,
        },
        {
          name: "Table Of Contents",
          importName: "tableOfContents()",
          macro: `
            {% macro tableOfContents() %}
            ## Table Of Contents
            
            - [Table Of Contents](#table-of-contents)
            - [About The Project](#about-the-project)
            - [Built With](#built-with)
            - [Getting Started](#getting-started)
            - [Prerequisites](#prerequisites)
            - [Installation](#installation)
            - [Usage](#usage)
            - [Roadmap](#roadmap)
            - [Contributing](#contributing)
            - [Creating A Pull Request](#creating-a-pull-request)
            - [License](#license)
            - [Authors](#authors)
            - [Acknowledgements](#acknowledgements)
            {% endmacro %}
`,
        },
      ],
    },
  ];

  return output;
}
