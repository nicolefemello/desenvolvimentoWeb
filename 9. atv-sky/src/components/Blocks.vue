<template>
    <section>
        <div id="first">
            <h3>Lorem Ipsum is simply dummy text.</h3>
            <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders
                measuring dozens of completed projects. We build and develop mobile applications for several top
                platforms, including Android & IOS. </p>
            <button>View More</button>
        </div>
        <div id="second">
            <h3>Lorem Ipsum is simply dummy text.</h3>
            <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders
                measuring dozens of completed projects. We build and develop mobile applications for several top
                platforms, including Android & IOS. </p>
            <button>View More</button>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    justify-content: center;
    margin-bottom: 8vw;

    & div {
        width: 572px;
        height: 459px;
        text-align: center;
        margin: 0 5vw 0 5vw;
        padding: 3vw 10vw 0 10vw;
        border-radius: 20px;

        & h3 {
            font-size: 25px;
            font-weight: 600;
            line-height: 42px;
            margin-bottom: 3vw;
        }

        & p {
            font-size: 16px;
            line-height: 27px;
            margin-bottom: 2vw;
        }

        & button {
            border-radius: 10px;
            border: none;
            padding: 0.8vw 1.5vw 0.8vw 1.5vw;
            font-size: 16px;
        }

    }

    & div#first {
        background-color: #F4F4F4;

        & p {
            color: #545454;
        }

        & button {
            background-color: #1090CB;
            color: #ffffff;
            font-weight: bold;
        }

        & button:hover {
            background-color: #189bd8;
            cursor: pointer;
        }
    }

    & div#second {
        background-color: #1090CB;

        & p {
            color: #ffffff;
        }

        & h3 {
            color: #ffffff;
        }

        & button {
            color: #1090CB;
            font-weight: bold;
        }

        & button:hover {
            background-color: #dddddd;
            cursor: pointer;
        }
    }
}
</style>