<!--
INSTRUCTION: Summary: The blank component contains the following two parts:
INSTRUCTION: - To the left: There is an empty div with text on top and bottom.
INSTRUCTION: - To the right: There is an empty div.
INSTRUCTION:
INSTRUCTION: If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div>` and then use the following syntax:
INSTRUCTION: <div class="grid">
INSTRUCTION:     <!-- these components appear to the left side -->
INSTRUCTION:     <div id="left-side-container" class="flex"> Left side part here </div>
INSTRUCTION:
INSTRUCTION:     <!-- these components appear to the right side -->
INSTRUCTION:     <div id="right-side-container" class="flex"> Right side part here</div>
INSTRUCTION: </div>
-->
<template>
    <div>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <section id="blank-section" class="bg-white dark:bg-gray-900 flex-1">
            <div id="blank-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                <div class="grid">
                    <div id="left-side-container" class="flex-1">
                        <div class="text-center">
                            <h1 :class="titleClasses" :style="titleStyles">
                                {{ $t('title') }}
                            </h1>
                            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                                {{ $t('subtitle') }}
                            </p>
                        </div>
                    </div>
                    <div id="right-side-container" class="flex-1">
                        <!-- Right side content -->
                    </div>
                </div>
            </div>
        </section>  
    </div>
</template>
            </div>
        </section>  
    </div>
</template>

<script>
export default {
    name: "BlankComponent",
    data() {
        return {
            expanded: false,
            tab: null,
            titleFont: 'Arial',
            titleSize: '4xl',
            titleColor: 'text-gray-900',
            titleBackground: 'bg-transparent',
        };
    },
    computed: {
        titleClasses() {
            return `mb-4 font-extrabold tracking-tight leading-none ${this.titleSize} ${this.titleColor} ${this.titleBackground}`;
        },
        titleStyles() {
            return `font-family: ${this.titleFont};`;
        }
    },
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>

<i18n>
{
  "en": {
    "title": "Funniest Game Ever",
    "subtitle": "Empowering Innovations, Transforming Futures"
  },
  "es": {
    "title": "El Juego Más Divertido de la Historia",
    "subtitle": "Empoderando Innovaciones, Transformando Futuros"
  },
  "fr": {
    "title": "Le Jeu le Plus Drôle de Tous les Temps",
    "subtitle": "Autonomiser les Innovations, Transformer les Avenirs"
  }
}
</i18n>
