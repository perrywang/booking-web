<?php

/**
 * hotels model config
 */

return array(

    'title' => 'Shoppings',

    'single' => 'Shopping',

    'model' => '\App\Shopping',

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
        'name_en',
        'name_cn',
        'city' => array(
            'title' => 'city',
            'relationship' => 'city',
            'select' => '(:table).name_en',
        ),
    ),

    'edit_fields' => array(
        'name_en' => array(
            'title' => 'Name',
            'type' => 'text',
        ),
        'name_cn' => array(
            'title' => '中文名称',
            'type' => 'text',
        ),
        'city' => array(
            'title' => 'city',
            'type' => 'relationship',
            'name_field' => 'name_en',
        ),
        'logo' => array(
            'title' => 'Shopping Logo',
            'type' => 'image',
            'location' => public_path() . '/uploads/shoppings/originals/',
            'naming' => 'keep',
            'size_limit' => 5,
            'sizes' => array(
                array(65, 57, 'crop', public_path() . '/uploads/shoppings/thumbs/small/', 100),
                array(220, 138, 'landscape', public_path() . '/uploads/shoppings/thumbs/medium/', 100),
                array(383, 276, 'fit', public_path() . '/uploads/shoppings/thumbs/full/', 100)
            )
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
        'website' => array(
            'title' => '网站链接',
            'type' => 'text',
        ),
    ),

);
