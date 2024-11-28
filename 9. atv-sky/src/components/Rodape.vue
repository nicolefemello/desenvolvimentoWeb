<template>
    <footer>
        <div>
            <div>
                <img src="../img/logo.png" alt="Logo Sky">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>@Lorem</p>
            </div>
            <ul>
                <li><a href="#" class="atual"></a>About Us</li>
                <li><a href="#">Lorem</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <p>Copyright ® 2021 Lorem All rights Reserved</p>
    </footer>
</template>

<style scoped>
footer {
    margin-top: 5vw;

    & div {
        padding: 0 5vw 0 5vw;
        display: flex;
        justify-content: space-between;

        & div {
            display: block;
            padding: 0;

            & img {
                width: 45px;
                height: 24px;
            }

            & p {
                color: #515151;
                margin: 2vw 0 2vw 0;
                border: none;
                text-align: left;
                padding: 0;
            }
        }

        & ul {
            list-style: none;

            & li {
                & a {
                    text-decoration: none;
                    color: #515151;
                    font-size: 16px;
                }
            }
        }
    }

    & p {
        border-top: #686868 0.8px solid;
        text-align: center;
        color: #686868;
        padding: 2vw 0 2vw 0;
    }
}
</style>