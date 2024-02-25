const posts = [
    {
        title: 'Google Chrome',
        content: "O Google Chrome é um navegador desenvolvido pelo Google, lançado em 2008. O Chrome é o navegador mais popular do mundo atualmente."
    },
    {
        title: 'Mozilla Firefox',
        content: "Mozilla Firefox é um navegador de código aberto desenvolvido pela Mozilla. Firefox é o segundo navegador mais popular desde janeiro de 2018."
    },
    {
        title: 'Microsoft Edge',
        content: "Microsoft Edge é um navegador desenvolvido pela Microsoft, lançado em 2015. O Microsoft Edge substituiu o Internet Explorer."
    }
];

const wrapper = document.getElementById('posts');

for (var i=0; i<posts.length; i++) {
    const postData = posts[i];
    console.log(postData);

    const article = document.createElement('article');
    article.classList.add('article');

    const title = document.createElement('h2');
    title.classList.add('article-title');
    const titleText = document.createTextNode(postData.title);
    title.appendChild(titleText);
    article.appendChild(title);
    
    const content = document.createElement('p');
    const contentText = document.createTextNode(postData.content);
    content.appendChild(contentText);
    article.appendChild(content);
    
    wrapper.appendChild(article);
}