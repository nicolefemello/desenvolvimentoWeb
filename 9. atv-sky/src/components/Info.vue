<template>
    <section>
        <ul>
            <li>
                <img src="../img/info-web.png" alt="Web Application" id="web">
                <div>
                    <h3>Web Application</h3>
                    <p>Lorem Ipsum is simply</p>
                </div>
            </li>
            <li>
                <img src="../img/info-seo.png" alt="SEO" id="seo">
                <div>
                    <h3>SEO</h3>
                    <p>Lorem Ipsum is simply</p>
                </div>
            </li>
            <li>
                <img src="../img/info-ar-vr.png" alt="AR/VR Solutions" id="solutions">
                <div>
                    <h3>AR/VR Solutions</h3>
                    <p>Lorem Ipsum is simply</p>
                </div>
            </li>
            <li>
                <img src="../img/info-mobile.png" alt="Mobile Applications" id="mobile">
                <div>
                    <h3>Mobile Applications</h3>
                    <p>Lorem Ipsum is simply</p>
                </div>
            </li>
        </ul>
    </section>
</template>

<style scoped>
section {
    border-bottom: solid 0.7px #C7C7C7;
    padding-bottom: 1vw;

    & ul {
        display: flex;
        justify-content: center;

        & li {
            display: flex;
            margin: 0 2vw;

            & img {
                width: 45px;
                height: 45px;
                margin-top: 1vw;
                padding: 1vw;
                border-radius: 20px;
            }

            & img#web {
                background-color: #EFEAFF;
            }

            & img#seo {
                background-color: #ECFFDA;
            }

            & img#solutions {
                background-color: #DAE6FF;
            }

            & img#mobile {
                background-color: #FFE5DA;
            }
        }

        div {
            margin-left: 1vw;

            & h3 {
                font-size: 20px;
                margin-bottom: 0.7vw;
            }

            & p {
                color: #969696;
                font-size: 15px;
            }
        }
    }
}
</style>