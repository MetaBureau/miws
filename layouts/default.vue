<template>
  <Nuxt />
<i-layout vertical>
    <i-layout>
        <i-layout-header>
            Header
            <Navbar />
        </i-layout-header>

        <i-layout-content>
            Content
            <slot />
        </i-layout-content>

        <i-layout-footer>
            Footer
        </i-layout-footer>
    </i-layout>

    <i-layout-aside>
        Right Aside
    </i-layout-aside>
</i-layout>

</template>