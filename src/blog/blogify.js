const fs = require('fs');
const marked = require('marked');
const blogDir = `${__dirname}/md`;
const blogArr = [];

/**
 * Get all markdown bogpost file paths into an array
 */
fs.readdirSync(blogDir).forEach(file => blogArr.push(`${__dirname}/md/`+file));

marked.setOptions({
    gfm: true,
    sanitize: true
})

/**
 * Map over the markdown files, convert them to html, and store in directory
 */
blogArr.forEach((post, index) => {
    let blog = fs.readFileSync(post);
    let blogHtml = marked(blog.toString());
    fs.writeFileSync(`${__dirname}/post${index+1}.html`, blogHtml);
})