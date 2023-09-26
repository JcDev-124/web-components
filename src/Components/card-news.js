class CardNews extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

        build(){
            // Criando os elementos e atribuindo suas classses e propriedades
            const componentRoot = document.createElement("div");
            componentRoot.setAttribute("class", "card");

            const cardLeft = document.createElement("div")
            cardLeft.setAttribute("class", "card__left");

            const cardRight = document.createElement("div");
            cardRight.setAttribute("class", "card__right");

            const autor = document.createElement("span");
            autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous") // atribuindo valor

            const linkTitle = document.createElement("a");
            linkTitle.textContent = this.getAttribute("title")
            linkTitle.href = this.getAttribute("link-url")

            const newsContent = document.createElement("p");
            newsContent.textContent = this.getAttribute("content")

            const image = document.createElement("img")
            image.src = this.getAttribute("photo") || "assets/gato.jpg";
            image.alt = "foto da noticia";

            //Adicionando as classes filhas aos seus pais
            componentRoot.appendChild(cardLeft);
            componentRoot.appendChild(cardRight);
            cardLeft.appendChild(autor);
            cardLeft.appendChild(linkTitle);
            cardLeft.appendChild(newsContent);
            cardRight.appendChild(image);

            //Return da classe pai
            return componentRoot;

        }

        styles(){
            const style = document.createElement("style");
            
            style.textContent = `
            .card{
                width: 720px;
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.5);
                -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.5);
                box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.5);
                display: flex;
                flex-direction: row;
                width: 100%;
                justify-content: space-between;
            }
            
            
            .card__left{
                display: flex;
                flex-direction: column; 
                justify-content: center;
                padding-left: 10px;

            
            }
            
            .card__left > a{
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            
            .card__left > p{
                color: gray;
            }
            
            .card__left > spam{
                font-weight: 400;
                
            }
            .card__right > img{
                border-radius: 20rem;
            }
            `
            return style;
        }
}

customElements.define('card-news', CardNews)