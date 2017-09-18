<template>
    <div>
        <h2>Home</h2>
        <tabs>
            <tab name="a">
                <component-a></component-a>
            </tab>
            <tab name="b">
                <component-b></component-b>
            </tab>
            <tab name="c">
                <component-c></component-c>
            </tab>
        </tabs>
    </div>
</template>

<script>
    import Tabs from '@/components/Tabs';
    import Tab from '@/components/Tab';

    export default {
        components: {
            Tabs,
            Tab,
            ComponentA: () => import( "@/components/ComponentA" ),
            ComponentB: () => import( "@/components/ComponentB" ),
            ComponentC: () => import( "@/components/ComponentC" )
        }
    }
</script>
