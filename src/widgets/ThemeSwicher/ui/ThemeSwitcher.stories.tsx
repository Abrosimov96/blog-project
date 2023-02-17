import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwicher } from './ThemeSwicher';

export default {
    title: 'widget/ThemeSwicher',
    component: ThemeSwicher,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof ThemeSwicher>;

const Template: ComponentStory<typeof ThemeSwicher> = (args) => <ThemeSwicher {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]