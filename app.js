document.addEventListener('alpine:init', () => {
  Alpine.data('atobText', () => ({
    text: '',
    transform() {
      try {
        return JSON.stringify(JSON.parse(atob(this.text)), null, 4);
      } catch (e) {
        return null;
      }
    }
  }));

  Alpine.data('btoaText', () => ({
    text: '',
    valid() {
      try {
        let valid = JSON.parse(atob(val));
        return true;
      } catch (e) {
        return false;
      }
    },
    transform() {
      try {
        const input = JSON.stringify(eval(`(${this.text})`));
        const valid = JSON.parse(input);
        return btoa(input);
      } catch (e) {
        return null;
      }
    }
  }));
});