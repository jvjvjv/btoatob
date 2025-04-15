import './app.css';
import Alpine from 'alpinejs';
import clipboard from 'clipboardy';

Alpine.data('page', () => {
  return {
    ready: false,
    init() {
      window.addEventListener('DOMContentLoaded', () => {
        this.$nextTick(() => {
          this.ready = true;
          console.log('ready', this.ready);
        });
      });
    }
  };
});

Alpine.data('atobText', () => ({
  text: '',
  transform() {
    try {
      return JSON.stringify(JSON.parse(atob(this.text)), null, 4);
    } catch (e) {
      return null;
    }
  },
  doCopyText() {
    clipboard.write(this.transform());
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
  },
  doCopyText() {
    clipboard.write(this.transform());
  }
}));

Alpine.start();