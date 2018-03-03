<template lang="html">
  <div id="app">
	<h1 v-text="title"></h1>
	<input v-model="newItem" v-on:keyup.enter="addNew">
	<ul>
		<li v-for="item in items" v-bind:class="{ finished: item.isFinished }" v-on:click="toggleFinished(item)">
			{{item.label}}
		</li>
	</ul>
	<p>child tells me: {{ childWords }}</p>
	<componentA msgfromfather="you die!"></componentA>
  </div>
</template>

<script>
	import Store from './store'
	import ComponentA from './components/componentA'
    export default {
    data() {
		return {
			title: 'This is todo list',
			items: Store.fetch(), 
			newItem: '',
			childWords: ''
		}
	},
	components: { ComponentA },

	watch: {
		items: {
			handler: function(items) {
				Store.save(items);
			},
			deep: true
		}
	}, 
	//事件
	events: {
		'children-tell-me-something': function(msg) {
			this.childWords = msg;
		}
	}, 

	methods: {
		toggleFinished: function(item) {
			item.isFinished != item.isFinished;
		},

		addNew: function() {
			this.items.push({
				label: this.newItem,
				isFinished: false
			})
			this.newItem = '';
		},

		listenToMyBoy: function(msg) {
			this.childWords = msg;
		}
	}
  }
</script>

<style scoped>
	.finished {
		text-decoration: underline;
	}
	
</style>
