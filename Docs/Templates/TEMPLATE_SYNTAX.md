# Templating

## Requirements

- Must be able to use variables
- Must be able to use conditionals
- Must be able to use arrays
- Must be able to use loops to iterate over arrays
- Can be filterable i.e. replacing "foo" with "bar"

- Template Inheritance <-- Important
  - Must be able to create templates, define blocks that child templates can override

``jks
{% block header %}
This is the default content
{% endblock %}

<section class="left">
  {% block left %}{% endblock %}
</section>

<section class="right">
  {% block right %}
  This is more content
  {% endblock %}
</section>
```

```jks
{% extends "parent.html" %}

{% block left %}
This is the left side!
{% endblock %}

{% block right %}
This is the right side!
{% endblock %}
```

- Can call super
- If condition condigitonal display
- for iterates over array
- macro defines a reusable chunk of code

- set allows you to modify variables
- extends for inheritance
- block identifies a section of the template

- Import allows you to load a different template and allows you to access its exported values

## Libraries

- [Nunjucks](https://mozilla.github.io/nunjucks/)

---

Title: {{title}}
Author: {{author}}
Date: {{date}}
Tags: {{tags}}
Featured: {{featured}}
Contributors:
{{#contributors}}

- {{name}}
  {{/contributors}}

---

# {{title}}

Author: {{author}}
Date: {{date}}

Tags: {{tags}}

{% if featured %}
This is a featured article.
{% endif %}

## Contributors

{% for contributor in contributors %}

- {{ contributor.name }}
  {% endfor %}

---

Content goes here...
