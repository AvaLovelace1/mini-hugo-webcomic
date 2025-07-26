# mini-hugo-webcomic

[![Demo][Browser]][Demo]

**mini-hugo-webcomic** is a minimal, responsive webcomic template built with the static site
generator [Hugo](https://gohugo.io/).
It was created for my comic, *[Academy 118](https://academy118.com)*.

## Installation

First clone this repository:

```bash
git clone https://github.com/AvaLovelace1/mini-hugo-webcomic.git
cd mini-hugo-webcomic
````

Then, [install Hugo](https://gohugo.io/installation/) and run:

```bash
hugo serve
```

This will start a local development server at `http://localhost:1313`.
Visit `http://localhost:1313` to preview your site.
The site will automatically reload when you make changes.

When you're ready to publish the site, run:

```bash
hugo
```

This generates site pages in a new directory called `public`.
Copy the contents of this directory to your web server's root directory, and you're done!

## Usage

### Site customization

**Adjust global site options** such as title and author by modifying the `hugo.toml` file.

**Add custom CSS** by modifying `assets/scss/main.scss`.

### Adding new comics

Comics are organized into _chapters_. Each chapter contains one or more _comic pages_.

#### Adding a new chapter

To add a new chapter, place a thumbnail image for the chapter in `assets/img/comic`
with the filename `[CHAPTER_ID]_thumb.[EXTENSION]`. Then, run:

```bash
hugo new content --kind chapter comic/[CHAPTER_ID]/_index.md
```

This creates a Markdown file containing chapter information at `content/comic/[CHAPTER_ID]/_index.md`.
To change the chapter information, modify the frontmatter of this file. Frontmatter options include:

- `title`: A human-readable version of the chapter title.
- `chapterID`: A short string identifying the chapter. **This must be the same as the `[CHAPTER_ID]` above.**
- `_build.render`: This should be kept as `'never'` to prevent Hugo from generating an extra page for the chapter.

#### Adding a new comic page

To add a new comic page to an existing chapter, place the comic page image in `assets/img/comic`
with the filename `[CHAPTER_ID]_[3-DIGIT-PAGE_NUMBER].[EXTENSION]`. Then, run:

```bash
hugo new content --kind comic-page comic/[CHAPTER_ID]/[PAGE_NUMBER].md
```

This creates a Markdown file containing comic page information at `content/comic/[CHAPTER_ID]/[PAGE_NUMBER].md`.
To change the comic page information, modify the frontmatter of this file. Frontmatter options include:

- `date`: The publication date of the comic page.
- `hover` (optional): The title-text that appears when you hover over the comic page image.

> [!WARNING]
> Comic pages are displayed in **ascending order by date**. They are **not ordered by page number**!
>
> If several comic pages have the exact same date, **they will not necessarily be ordered correctly**.
> Therefore, if you publish several comic pages on one day, make sure their dates differ by at least one second.

### Adding non-comic pages

Non-comic pages (such as an "About" or "Extras" page) can be added with:

```bash
hugo new content [TITLE].md
```

You may add this page to the navbar by creating an additional `menu.main` entry in `hugo.toml`.

<!-- Links -->

[Demo]: https://avalovelace1.github.io/mini-hugo-webcomic/

[Browser]: https://img.shields.io/badge/Live%20Demo-4285F4?logo=GoogleChrome&logoColor=white&style=for-the-badge