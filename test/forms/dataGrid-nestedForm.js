export default {
  type: 'form',
  components: [
    {
      label: 'Data Grid',
      reorder: false,
      addAnotherPosition: 'bottom',
      defaultOpen: false,
      layoutFixed: false,
      enableRowGroups: false,
      initEmpty: false,
      tableView: true,
      defaultValue: [
        {
          textField: ''
        }
      ],
      key: 'dataGrid',
      type: 'datagrid',
      input: true,
      components: [
        {
          label: 'Text Field',
          tableView: true,
          key: 'textField',
          type: 'textfield',
          input: true
        },
        {
          label: 'Form',
          tableView: true,
          form: {
            type: 'form',
            components: [
              {
                label: 'Child Text',
                tableView: true,
                validate: {
                  required: true
                },
                key: 'childText',
                type: 'textfield',
                input: true
              },
              {
                label: 'Child Number',
                mask: false,
                spellcheck: true,
                tableView: false,
                delimiter: false,
                requireDecimal: false,
                inputFormat: 'plain',
                validate: {
                  required: true
                },
                key: 'childNumber',
                type: 'number',
                input: true
              },
              {
                type: 'button',
                label: 'Submit',
                key: 'submit',
                disableOnInvalid: true,
                input: true,
                tableView: false
              }
            ],
            revisions: '',
            _vid: 0,
            title: 'FJS-1426 Child',
            display: 'form',
            name: 'fjs1426Child',
            path: 'fjs1426child'
          },
          key: 'form1',
          type: 'form',
          input: true
        }
      ]
    },
    {
      type: 'button',
      label: 'Submit',
      key: 'submit',
      disableOnInvalid: true,
      input: true,
      tableView: false
    }
  ],
  revisions: '',
  _vid: 0,
  title: 'FJS-1426 Parent',
  display: 'form',
  name: 'fjs1426Parent',
  path: 'fjs1426parent'
};
