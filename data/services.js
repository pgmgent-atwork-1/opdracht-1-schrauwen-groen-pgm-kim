(() => {
    const app = {
        init() {
            console.log('Initialize app');
            this.cacheElements();
        },
        cacheElements() {
            console.log('Cache elements');
            this.$referenceList = document.querySelector('.references--list');
        
        },
        genHTMLForReferences(references) {
            return references.map((ref) => {
                return `
                    ${ref.title}
                    ${ref.pictureURL}
                `;
            })
        }
    }
    app.init();
})();