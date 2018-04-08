<script>
export default {
  methods: {
    copyObject(obj) {
      return JSON.parse(JSON.stringify(obj));
    },
    getCenter(el) {
      const element = el.$el || el;
      const centerX = (element.offsetLeft + element.offsetWidth) / 2;
      const centerY = (element.offsetTop + element.offsetHeight) / 2;
      return {
        x: centerX,
        y: centerY,
      };
    },
    numberToLetter(number) {
      const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      return letters[number];
    },
    numberToLetterUppercase(number) {
      return this.numberToLetter(number).toUpperCase();
    },
    numberToRoman(number) {
      const digits = String(+number + 1).split('');
      const key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
        '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
        '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
      let roman = '';
      let i = 3;
      while (i !== 0) {
        i -= 1;
        roman = (key[+digits.pop() + (i * 10)] || '') + roman;
      }
      return Array(+digits.join('') + 1).join('M') + roman;
    },
  },
};
</script>
