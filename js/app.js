new Vue({
    el: '#app',
    data: {
        titre: "Fruits and vegetables sorter",
        fruits: ['banana', 'apple', 'cherry', 'coconut', 'mango'],
        vegetables: ['tomato', 'capsicum', 'courgette', 'sweet potato', 'peach'],
        sortedFruits: [],
        sortedVegetables: [],
        elementToSort: '',
        allElements: [],
        number: 0
    },
    methods: {
        addAllElements: function() {
            console.log("Saving the value in elementToSort ");
            this.allElements.push(this.elementToSort);
            this.number = this.number + 1;
            this.elementToSort = '';
        },
        sortElements: function() {
            // Sorting fruits
            for (let i = 0; i < this.allElements.length; i++) {
                for (let j = 0; j < this.fruits.length; j++) {
                    if (this.allElements[i] === this.fruits[j]) {
                        this.sortedFruits.push(this.allElements[i]);
                    }
                }
            }

            // Sorting vegetables
            for (let i = 0; i < this.allElements.length; i++) {
                for (let j = 0; j < this.vegetables.length; j++) {
                    if (this.allElements[i] === this.vegetables[j]) {
                        this.sortedVegetables.push(this.allElements[i]);
                    }
                }
            }            

            // Handle multiple fruits
            for (let i = 0; i < this.sortedFruits.length; i++) {
                let currentWord = this.sortedFruits[i];
                let indexElements = [];
                let countSameElement = 0;

                for (let j = 0; j < this.sortedFruits.length; j++) {
                    if (currentWord === this.sortedFruits[j]) {
                        countSameElement = countSameElement + 1;
                        indexElements.push(j);
                    }
                }

                if (countSameElement > 1) {
                    this.sortedFruits[indexElements[0]] = this.sortedFruits[indexElements[0]] + ' (X' + indexElements.length + ')';
                    for (k = 1; k < indexElements.length; k++) {
                        let index = this.sortedFruits.indexOf(this.sortedFruits[k]);
                        this.sortedFruits.splice(index, 1);
                    }
                }
            }

            // Handle multiple vegetables
            for (let i = 0; i < this.sortedVegetables.length; i++) {
                let currentWord = this.sortedVegetables[i];
                let indexElements = [];
                let countSameElement = 0;

                for (let j = 0; j < this.sortedVegetables.length; j++) {
                    if (currentWord === this.sortedVegetables[j]) {
                        countSameElement = countSameElement + 1;
                        indexElements.push(j);
                    }
                }

                if (countSameElement > 1) {
                    this.sortedVegetables[indexElements[0]] = this.sortedVegetables[indexElements[0]] + ' (X' + indexElements.length + ')';
                    for (k = 1; k < indexElements.length; k++) {
                        let index = this.sortedVegetables.indexOf(this.sortedVegetables[k]);
                        this.sortedVegetables.splice(index, 1);
                    }
                }
            }

            this.number = 0;
            this.allElements = [];
        }
    }
})
