<template>
    <section>
        <div>
            <h1>Experienced <span>mobile and web</span> applications and website builders measuring.</h1>
            <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders
                measuring dozens of completed projects. We build and develop mobile applications for several top
                platforms,
                including Android & IOS.</p>
            <button id="contact"><a href="#">Contact Us</a></button>
            <button id="view"><a href="#">View More</a></button>
        </div>
        <img src="../img/banner.png" alt="Banner Image">
    </section>
</template>

<style scoped>
section {
    display: flex;
    justify-content: center;
    padding-bottom: 3vw;
    background-color: #1090CB1A;

    & div {
        margin: 0 15vw 0 10vw;

        & h1 {
            font-size: 40px;

            & span {
                color: #1090CB;
            }
        }

        & p {
            font-size: 16px;
            color: #5C5C5C;
        }

        & button {
            padding: 0.5vw 2vw 0.5vw 2vw;
            border: none;
            border-radius: 5px;
            margin: 2vw;

            & a {
                text-decoration: none;
                font-size: 16px;
            }
        }

        & button#contact {
            background-color: #1090CB;
            margin-left: 0;

            & a {
                color: #ffffff;
            }
        }

        & button#contact:hover {
            background-color: #189bd8;
            cursor: pointer;
        }

        & button#view {
            background-color: #ffffff;
            border: #1090CB 1px solid;

            & a {
                color: #1090CB;
            }
        }

        & button#view:hover {
            background-color: #ebe9e9;
            cursor: pointer;
        }
    }

    img {
        margin-top: 0;
        margin-right: 5vw;
    }
}
</style>