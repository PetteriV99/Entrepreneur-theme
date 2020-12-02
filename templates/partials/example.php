<div class="Example bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 fixed flex inset-0 items-center justify-center">
    <div class="Example__inner bg-white max-w-2xl p-12 rounded-lg shadow-lg text-center">

        <h1 class="Example__title">EntreFox</h1>

        <p class="text-gray-700">This is a just an example page
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a> &
            <a href="https://laravel.com/docs/5.8/mix" target="_blank" rel="noopener noreferrer">Laravel Mix</a> for
            building custom WordPress themes.</p>

		<?php
		// You may use 'views' to render your UI components. Views are designed for use anywhere as they, ideally, have
		// no context-specific functionality – the simply render data handed to them as follows:
		\WpTailwindCssThemeBoilerplate\View::render( 'ExampleView', [
			'title' => 'Example using ExampleView',
			'text' => 'Github url is here: <a href="404" target="_blank">TBD</a>',
		] ); ?>

    </div>
</div>