// model
const models = {
    poker: [], // 撲克順序
}

// Controller
const Controller = {
    // 產生亂數52張牌的位置
    creatPoker() {
        let pokerMark = {}
        for (let i = 0; i < 52; i++) {
            let rand = Math.round(Math.random() * 51)
            if (typeof pokerMark[rand] === 'undefined' && rand !== pokerMark[rand]) {
                pokerMark[rand] = i
            } else {
                i--
            }
        }
        return pokerMark
    },
}

const View = {
    // 起始渲染撲克牌
    showPoker(pokerData) {
        for (let i in pokerData) {
            let pokerItem = `
                <div class="card-item" data-index="${pokerData[i]}">
                    <div class="card">
                        <div class="card-img ${this.transCardClass(pokerData[i])}"></div>
                        <div class="card-back"></div>
                    </div>
                </div>`
            $(".cards").append(pokerItem)
        }
        this.cardClickEven()
    },
    // index to class
    transCardClass(index) {
        const colorArr = ['a', 'b', 'c', 'd']
        let color = Math.trunc(index / 13)
        let number = index % 13 + 1
        return "poker_" + colorArr[color] + number
    },
    // 翻牌事件聆聽
    cardClickEven() {
        $(".card-item").click(function() {
            $(this).children("div").toggleClass("is_active")
        })
    }
}

// 初始化撲克牌位置
models.poker = Controller.creatPoker()
console.log(models.poker)
View.showPoker(models.poker)