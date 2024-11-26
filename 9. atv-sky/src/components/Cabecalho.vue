<template>
    <header>
        <h1>CÉU</h1>
        <nav>
            <ul>
                <li><a href="#" class="atual">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
                <li><span><a href="#">Contact Us</a></span></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    padding: 1vw 2vw 0 2vw;

    & h1 {
        color: #1090CB;
        font-size: 29px;
        margin-top: 0.5vw;
    }

    & nav ul {
        display: flex;
        list-style: none;

        & li {
            margin: 0 2vw 0 2vw;

            & a {
                text-decoration: none;
                color: #000000;
                font-size: 16px;
            }

            & a.atual {
                color: #1090CB;
            }

            & span {
                background-color: #1090CB;
                padding: 0.5vw 1vw 0.5vw 1vw;
                border-radius: 5px;

                & a {
                    color: #ffffff;
                    font-size: 13px;
                }
            }

            & span:hover {
                background-color: #189bd8;
            }
        }
    }
}
</style>