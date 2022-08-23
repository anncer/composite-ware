export default (type) => {
  const arr1 = [
    {
      label: '序号',
      type: 'index',
      width: '60px'
    },
    {
      label: '姓名',
      code: 'fullName'
    },
    {
      label: '党组织机构',
      code: 'partyOrgName'
    },
    {
      label: '用工类型',
      code: 'empTypeName'
    },
    {
      label: 'ERP编号',
      code: 'erpNo'
    }
  ]
  const arr2 = [
    {
      label: '序号',
      type: 'index',
      width: '60px'
    },
    {
      label: '姓名',
      code: 'fullName'
    },
    {
      label: '组织机构',
      code: 'deptName'
    },
    {
      label: '用工类型',
      code: 'empTypeName'
    },
    {
      label: 'ERP编号',
      code: 'erpNo'
    }
  ]
  return type === 'partyOrg' ? arr1 : arr2
}
