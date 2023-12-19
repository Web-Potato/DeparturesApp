<script setup>

</script>

<template>
    <div class="board-container">
        <div class="loader">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
        </div>
    </div>
</template>

<style scoped>
.board-container {
        display: flex;
        flex-direction: column;
        width: 70%;
        height: 800px;
        overflow: scroll;
        padding: 30px 0;
        background: rgb(71,71,71);
        background: linear-gradient(90deg, rgba(71,71,71,1) 0%, rgba(0,0,0,1) 99%);
    }
    /* loader */
.loader {
    display: flex;
    flex-direction: row;
    margin: auto;
    --speed-of-animation: 0.9s;
    --gap: 6px;
    --first-color: #ddc231;
    --second-color: #c4ad2b;
    --third-color: #ac9726;
    --fourth-color: #938220;
    --fifth-color: #7b6c1b;
    --sixth-color: #625616;
    --seventh-color: #494110;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 100%;
    gap: 5px;
}

.loader span {
    width: 30px;
    height: 76px;
    background: var(--first-color);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 2rem;
    font-weight: bold;
    animation: scale var(--speed-of-animation) ease-in-out infinite;
    border-radius: 10px;
}
.loader span:nth-child(1) {
    background: var(--first-color);
    animation-delay: -0.1s;
}

.loader span:nth-child(2) {
    background: var(--second-color);
    animation-delay: 0.1s;
}

.loader span:nth-child(3) {
    background: var(--third-color);
    animation-delay: 0.2s;
}

.loader span:nth-child(4) {
    background: var(--fourth-color);
    animation-delay: 0.3s;
}

.loader span:nth-child(5) {
    background: var(--fifth-color);
    animation-delay: 0.4s;
}

.loader span:nth-child(6) {
    background: var(--sixth-color);
    animation-delay: 0.5s;
}

.loader span:nth-child(7) {
    background: var(--seventh-color);
    animation-delay: 0.6s;
}

@keyframes scale {
    0%, 50%, 100% {
        transform: scaleY(0.03);
    }
    20% {
        transform: scaleY(1);
    }
}
/* end of loader */
</style>