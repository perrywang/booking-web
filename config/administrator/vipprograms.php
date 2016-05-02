<?php

/**
 * vipprograms model config
 */

return array(

    'title' => 'Vip Programs',

    'single' => 'Vip Program',

    'model' => '\App\VipProgram',

    'form_width' =>700,

    'sort' => array(
        'field' => 'id',
        'direction' => 'asc',
    ),
    /**
     * The display columns
     */
    'columns' => array(
        'id',
        'title_en',
        'title_cn',
    ),

    'edit_fields' => array(
        'title_en' => array(
            'title' => 'Title',
            'type' => 'text',
        ),
        'title_cn' => array(
            'title' => '中文标题',
            'type' => 'text',
        ),
        'desc_en' => array(
            'title' => 'Description',
            'type' => 'textarea',
        ),
        'desc_cn' => array(
            'title' => '中文描述',
            'type' => 'textarea',
        ),
        'body_en' => array(
            'title' => 'Detailed Description',
            'type' => 'wysiwyg',
        ),
        'body_cn' => array(
            'title' => '详细中文描述',
            'type' => 'wysiwyg',
        ),
    ),

);
