const app = new Vue({
	el: '#app',
	data: {
		list: [
			{
				id: 1,
				name: '《哈利波特》',
				date: '2006-9',
				price: 85.00,
				count: 1
			},
			{
				id: 2,
				name: '《安徒生童话》',
				date: '2006-2',
				price: 59.00,
				count: 1
			},
			{
				id: 3,
				name: '《流浪地球》',
				date: '2008-10',
				price: 39.00,
				count: 1
			},
			{
				id: 4,
				name: '《三体》',
				date: '2006-3',
				price: 128.00,
				count: 1
			},
		]
	},
	methods: {
		decrement(index) {
			this.list[index].count--;
		},
		increment(index) {
			this.list[index].count++;
		},
		handleRemove(index) {
			this.list.splice(index, 1);
		}
	},
	filters: {
		showPrice(value) {
			return '¥' + value.toFixed(2)
		}
	},
	computed: {
		totalPrice() {
			let total = 0;
			for (let i = 0; i < this.list.length; i++) {
				let item = this.list[i];
				total += item.price * item.count;
			}
			return total
		}
	}
})