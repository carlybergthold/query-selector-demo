console.log('hiya');

// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
const firstHeader = document.querySelector('.article__header');
console.log('firstHeader', firstHeader);
firstHeader.textContent = "Welcome to Carly's Blog";


// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
const allHeaders = document.querySelectorAll('.article__header');
console.log('allHeaders', allHeaders);

for (let i = 0; i < allHeaders.length; i++) {
    allHeaders[i].classList.add('important');
}


// Obtain a reference the element with a class of dashed and remove it.
const dashed = document.querySelector('.dashed');
console.log('dashed', dashed);
// dashed.classList.remove('dashed');
dashed.remove();


// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
const articleFooter = document.querySelector('.article__footer');
console.log('articleFooter', articleFooter);
articleFooter.classList.add('goldenrod');







