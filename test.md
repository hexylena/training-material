---
layout: base
contributors:
- hexylena
- shiltemann
---
{% include _includes/default-header.html %}

<style type="text/css" media="all">
.card-title {
	font-size: 2rem;
}

</style>
<div class="container main-content">
	<section>

	<h1>Testing</h1>






<p>{% include _includes/contributor-badge-list.html contributors=page.contributors %}</p>

<script type="text/javascript">


window.addEventListener('DOMContentLoaded', (event) => {
	$('a[data-poload]').hover(
		function() {
			var e=$(this);
			e.off('hover');

			fetch(e.data('poload'))
				.then((response) => {
					return response.text();
				})
				.then((html) => {
					e.popover({
						//trigger: 'hover',
						content: html,
						html: true
					}).popover('show');
				});
		}, function() {
			console.log('out');
			//$(this).popover('hide')
		}
	);
});
</script>




	</section>
</div>

{% include _includes/default-footer.html %}
