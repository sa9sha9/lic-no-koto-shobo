const t = TrelloPowerUp.iframe();
const Promise = window.TrelloPowerUp.Promise;

// card context
const context = t.getContext();

/**
 * Borrowボタンをクリックした時のイベント処理
 *
 */
window.btn_borrow.addEventListener('click', function( event ) {
	event.preventDefault();
	const User = {
		belonging: window.user_belonging.value,
		name: window.user_name.value,
		comment: window.user_comment.value,
	}
	const comments = `
### 借りた人
- 所属: ${User.belonging}
- 名前: ${User.name}
- ひとこと: ${User.comment}
	`
	Trello.post(`/cards/${context.card}/actions/comments`, {
		text: comments
	})
	.then( (res) => {
		console.log('successfully borrowed')
		t.closePopup()
	})
	.catch( (errorMsg) => {
		console.error( 'Comment Error: ', errorMsg );
	})

	// putBorrowLog(CurrentCardContext, User)
} );


/** Rendering borrowing form */
t.render( function() {
	Trello.get(`/cards/${context.card}`)
	.then( (res) => {
		// 本のタイトルを自動入力
		window.book_title.value = res.name
	})
	.then( () =>
		t.sizeTo('#borrow_form').done()
	)
	.catch( (errorMsg) => {
		console.error( 'Failed to fetch book_name: ', errorMsg );
	})
} );