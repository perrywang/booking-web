<?php

/**
 * packages model config
 */

return array(

    'title' => 'Packages',

    'single' => 'Package',

    'model' => '\App\TravelPackage',

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
