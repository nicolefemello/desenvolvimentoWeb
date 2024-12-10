<template>
    <section>
        <div>
            <div>
                <h2><span>Lorem Ipsum</span> is simply dummy text of the printing.</h2>
                <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders
                    measuring dozens of completed projects. We build and develop mobile applications for several top
                    platforms, including Android & IOS. </p>
            </div>
            <img src="../img/phone.png" alt="Phone Image">
        </div>
        <div>
            <img src="../img/phone-website.png" alt="Phone Image">
            <div>
                <h2><span>Lorem Ipsum</span> is simply dummy text of the printing.</h2>
                <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders
                    measuring dozens of completed projects. We build and develop mobile applications for several top
                    platforms, including Android & IOS. </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    & div {
        display: flex;
        margin: 0 15vw 10vw 12vw;
        
        & div {
            display: block;
            width: 516px;
            margin: 0 3vw 0 3vw;

            & h2 {
                font-size: 30px;
                color: #252525;
                font-weight: 600;
                line-height: 51px;
                margin-bottom: 3vw;

                & span {
                    color: #1090CB;
                }
            }

            & p {
                color: #545454;
                line-height: 27px;
            }
        }
    }
}
</style>