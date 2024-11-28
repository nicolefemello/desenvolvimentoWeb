<template>
    <section>
        <h2>Lorem Ipsum is simply dummy text of the printing.</h2>
        <input type="email" placeholder="Enter your email">
        <button>SUBSCRIBE</button>
    </section>
</template>

<style scoped>
section {
    background-color: #E8F4FA;
    text-align: center;
    padding: 10vw 0 10vw 0;

    & h2 {
        color: #252525;
        margin: 0 35vw 5vw 35vw;
        font-size: 30px;
    }

    & input {
        width: 532px;
        height: 67px;
        border-radius: 10px;
        border: none;
        padding-left: 1vw;
        font-size: 16px;
        color: #787878;
    }

    & button {
        background-color: #000000;
        color: #FFF4F4;
        padding: 1vw 2vw 1vw 2vw;
        margin-left: 3vw;
        border-radius: 10px;
        border: none;
    }

    & button:hover {
        cursor: pointer;
        background-color: #1d1d1d;
    }
}
</style>